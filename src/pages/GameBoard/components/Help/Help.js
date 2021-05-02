import React from "react";
import styled from "styled-components";
import Players from "../GameInfo/components/Players/Players";
import TabsHelp from '../ButtonsBoard/ButtonsBoard'
import {
  HEATMAP_FULL,
  HEATMAP_ZONE_QUARTER,
  HEATMAP_ZONE_QUARTER_ONE,
} from "./types";

const Wrapper = styled.div`
  width: 90%;
  margin-left: 25px;
`;

const HelpWrapper = styled.div`
  margin-top: 23px;
  max-height: 508px;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const HelpItem = styled.div`
  width: 48%;
  margin-bottom: 10px;
  background: ${(props) => (props.active ? "#D8AD63" : "#f6f6f6")};
  padding: 10px;
  cursor: pointer;
`;

const Help = ({
    enemyPass,
    stepColor,
    yourColor,
    you,
    opponent,
    stepMain,
    stepTwo,
    handleHelp,
    activeHelpId,
    scores,
    times,
    hint,
    setHint,
    setResign
  }) => {
  return (
    <Wrapper>
      <Players
        enemyPass={enemyPass}
        opponent={opponent}
        you={you}
        stepColor={stepColor}
        yourColor={yourColor}
        stepMain={stepMain}
        stepTwo={stepTwo}
        times={times}
      />
       <TabsHelp hint={hint} setHint={setHint} setResign={setResign}/>
      <HelpWrapper>

        <HelpItem
          active={activeHelpId === 1}
          onClick={() =>
            scores && handleHelp({ type: "single", id: 1, count: 1 })
          }
        >
          Лучший ход
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === 31}
          onClick={() =>
            scores && handleHelp({ type: "futuredGame", id: 31, count: 4 })
          }
        >
          Развитие игры на 4 хода вперёд
        </HelpItem>
		
		
		<HelpItem
          active={activeHelpId === 2}
          onClick={() =>
            scores && handleHelp({ type: "single_war", id: 2, count: 1 })
          }
        >
          Лучший ход соперника
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_FULL}
          onClick={() =>
            scores && handleHelp({ type: "map", id: HEATMAP_FULL })
          }
        >
          Тепловая карта всей доски. Детализированная
        </HelpItem>
        <HelpItem
          active={activeHelpId === 16}
          onClick={() =>
            scores &&
            handleHelp({ type: "multiple", multipleHandleCount: 4, id: 16 })
          }
        >
          Показать лучший из заданных 3 ходов
        </HelpItem>
		
		
        <HelpItem
          active={activeHelpId === HEATMAP_ZONE_QUARTER}
          onClick={() =>
            scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER })
          }
        >
          В какой четверти доски сейчас лучший ход?
        </HelpItem>
		<HelpItem
          active={activeHelpId === 24}
          onClick={() =>
            scores && handleHelp({ type: "map", id: 24 })
          }
        >
          Лучшая половина
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === HEATMAP_ZONE_QUARTER_ONE}
          onClick={() =>
			scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 1 })
          }
        >
          Тепловая карта 1-ой четверти доски
        </HelpItem>
		
		<HelpItem
          active={activeHelpId === 3}
          onClick={() =>
			scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 2 })
          }
        >
          Тепловая карта 2-ой четверти доски
        </HelpItem>
		<HelpItem
          active={activeHelpId === 4}
          onClick={() =>
			scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 3 })
          }
        >
          Тепловая карта 3-ой четверти доски
        </HelpItem>
		<HelpItem
          active={activeHelpId === 5}
          onClick={() =>
			scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER_ONE, count: 4 })
          }
        >
          Тепловая карта 4-ой четверти доски
        </HelpItem>
		
		
        <HelpItem
          active={activeHelpId === 34}
          onClick={() => scores && handleHelp({ type: "score", id: 34 })}
        >
          Кто побеждает на данный момент?
        </HelpItem>
      </HelpWrapper>
    </Wrapper>
  );
};


const Scenarius = ({
  enemyPass,
  stepColor,
  yourColor,
  you,
  opponent,
  stepMain,
  stepTwo,
  handleHelp,
  activeHelpId,
  scores,
  times,
  hint,
  setHint,
  setResign
}) => {
return (
  <Wrapper>
    <Players
      enemyPass={enemyPass}
      opponent={opponent}
      you={you}
      stepColor={stepColor}
      yourColor={yourColor}
      stepMain={stepMain}
      stepTwo={stepTwo}
      times={times}
    />
     <TabsHelp hint={hint} setHint={setHint} setResign={setResign}/>
    <HelpWrapper>
    <HelpItem
        active={activeHelpId === 22}
        onClick={() =>
          scores && handleHelp({ type: "map", id: 22 })
        }
      >
        Захват начальной территории
      </HelpItem>
    </HelpWrapper>
  </Wrapper>
);
};

export default Help;
