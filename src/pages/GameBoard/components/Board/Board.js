import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Goban } from "react-goban";
import styled from "styled-components";
import { markersClear, setMapStones } from "../../../../store/Board/actions";
import { client } from "../../../../Socket";

const Text = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-right: 32px;
  cursor: pointer;
  width: 45%;
  background-color: #EBEBEB;
  text-align: center;
  padding: 10px 0px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
flex-direction: column;
  position: relative;
  display: flex;
align-items: center;
justify-content: center;
background-color: #786354;
  & > div {
    top: 0;
    right: 0;
    left: 0;
  }
  &>.react-goban{
    width: 65%;
    background-color: #b4916c;
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonsBoard = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Board = ({
  lastMarkers,
  socket,
  setHint,
  currentColor,
  setCurrentColor,
  yourColor,
  helpType,
  setMultipleHint,
  multipleHint,
  coordinates,
  setCoordinates,
  setHelpType,
  setMultipleType,
  setActiveHelpId,
  setMapType,
  setStonePosition,
  classNames,
  mapStones,
  setPass,
  setResign
}) => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.board.markers);
  const classNamesMapStones = useSelector(
    (state) => state.board.classNamesMapStones
  );

  const handleTurn = (stonePosition) => {
    client.send(JSON.stringify([7, "go/game", {command: "move", token: "1cfc52aacaba0507e66d74cd878020f071457220", place: stonePosition.toString().toLowerCase(), game_id: 8}]));
    let valid = true;
    for (const key in coordinates) {
      if (key === stonePosition) {
        valid = false;
      }
    }
    if (valid && currentColor === yourColor) {
      setStonePosition(stonePosition)
      //setCoordinates({ ...coordinates, [stonePosition]: currentColor });
      setCurrentColor(currentColor === "white" ? "black" : "white");
      setHint(false);
      dispatch(markersClear());
      setHelpType("");
      setActiveHelpId("");
      setMultipleType(false);
      setMapType(false);
    }
  };

  const handleMultipleTurn = (stonePosition) => {
    let valid = true;
    for (const key in coordinates) {
      if (key === stonePosition) {
        valid = false;
      }
    }
    if (valid) {
      dispatch(setMapStones({ ...mapStones, [stonePosition]: 'circle' }))
      setMultipleHint(stonePosition);
      //setCoordinates({ ...coordinates, [stonePosition]: currentColor });
    }
  };

  let className;
  if (currentColor !== yourColor) {
    className = 'disabled'
  } else {
    className = ''
  }

  return (
    <Wrapper className={className}>
        <Goban
          style={{ position: "absolute" }}
          stones={coordinates}
          markers={markers}
          lastMarkers={lastMarkers}
          mapStones={mapStones}
          classNamesMapStones={classNamesMapStones}
          onIntersectionClick={
            helpType !== "multiple" ? handleTurn : handleMultipleTurn
          }
          nextToPlay={yourColor}
        />

        <ButtonsBoard>
        <Text onClick={() => setPass()}>Пас</Text>
            <Text onClick={() => setResign()}>Сдаться</Text>
        </ButtonsBoard>
    </Wrapper>
  );
};

export default Board;
