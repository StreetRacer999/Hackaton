import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { CodeContent } from "../CodeContent";
import { Connect } from "../Connect";
import { LoadingGame } from "../LoadingGame";
import { Winner } from "../Winner";
import { Error } from "../Error";
import { INFO_URL } from "../../../../constants/routes";
import { createRandomGame, createGameWithAi } from "../../../../store/GameCreate/actions";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCustomAndArrow, ButtonCustomForm } from "../../../../components/ButtonCustom";
import Logo from "../../../../assets/img/logo.png";

const Wrapper = styled.div`
  // width: 613px;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0px;
`;

const ContainerOne = styled.div`
  background-color: #786354;
  width: 100%;
  min-width: 700px;
  // margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-self: flex-start;
  margin-bottom: 49px;
  color: white;
  font-size: 32px;
  align-items: center;\
`;

const Logotype = styled.img`
  height: auto;
  width: 60px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.p`
  cursor: pointer;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.active ? "#000000" : "#838383")};
  font-weight: 700;
`;
const Span = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #838383;
  font-weight: 700;
  margin-left: 5px;
  margin-right: 5px;
`;

const Left = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
flex-direction: column
`;

const Titlemain = styled.h1`
  color: white;
  font-size: 48px;
  margin-bottom: 40px;
  flex: 0 0 auto;
`;

const ContantMain = styled.div`
flex: 1 0 auto;
`;

const FooterMain = styled.div`
font-size: 20px;
font-weight: bold;

color: white;
flex: 0 0 auto;
`;

const Hello = styled.p`
  font-size: 32px;
  color: gray;  
  margin: 10px 0px;
`;
const DecriptionOne = styled.p`
font-size: 48px;
  margin: 10px 0px;
`;
const DecriptionTwo = styled.p`
  font-size: 32px;
  margin: 10px 0px;
`;
const Label = styled.label`
  font-size: 24px;
  margin-top: 20px;
`;

const FixedBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5)
`;

const FixedBlockContainer = styled.div`
  max-width: 70%;
  background: #fff;
  padding: 30px;

`

const ContentMainBoard = (setSearchType, searchType, history, gameId) => {
  const [opponent, setOpponent] = useState({})
  const [code, setCode] = useState('')
  
  switch (searchType) {
    case "Code":
      return <CodeContent gameId={gameId} setSearchType={setSearchType} />;

    case "Random":
      return (
        
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          text="Ожидание случайного соперника"
          setOpponent={setOpponent}
          searchType={searchType}
        />
      );

    case "CodeEnter":
      return (
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          setOpponent={setOpponent}
          code={code}
          text="Ожидание второго игрока"
          searchType={searchType}
        />
      );

    case "ConnectRandom":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Противник найден!"
        />
      );

    case "ConnectCode":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Игрок подключился!"
        />
      );

    case "Win":
      return <Winner setSearchType={setSearchType} />;

    case "Error":
      return (
        <Error
          error="Не удалось подключиться к запрашиваемой игре"
          setSearchType={setSearchType}
        />
      );

    default:
  }
};

export const Content = ({ history, searchType, setSearchType }) => {
  const dispatch = useDispatch();
  const gameId = useSelector(state => state.createGame.id);

  useEffect(async () => {
    if (searchType === "Random") await dispatch(createRandomGame())
    if (searchType === "WithAi") await dispatch(createGameWithAi())
  }, [searchType])

  return (
    <Wrapper>
      <ContainerOne>
        <Left>
          <Titlemain>
            <Top>
              <Logotype alt="logo" src={Logo} />
              ГоСтратег
            </Top>
            {/* Эффективная система подсказок в игре Го */}
          </Titlemain>
          <ContantMain>
            <ButtonCustomAndArrow mb={0} onClick={() => history.push('/gameBoard')} disabled={gameId === null}>
              Продолжить игру
          </ButtonCustomAndArrow>
   
            <ButtonCustomAndArrow mb={0} onClick={() => { document.getElementById('overflow-wrapper').style.display = "flex"; setSearchType("Random")}} disabled={gameId !== null}>
              Игра со случайным соперником
          </ButtonCustomAndArrow>
            <ButtonCustomAndArrow mb={0} onClick={() => {document.getElementById('overflow-wrapper').style.display = "flex"; setSearchType("WithAi")}} disabled={gameId !== null}>
              Игра с ИИ
          </ButtonCustomAndArrow>
            <ButtonCustomAndArrow onClick={() => {document.getElementById('overflow-wrapper').style.display = "flex";setSearchType("Code")}} mb={0} disabled={gameId !== null}>
              Закрытая игра
          </ButtonCustomAndArrow>
            <ButtonCustomAndArrow mb={0} onClick={() => history.push('/liders')}>Рейтинг игроков</ButtonCustomAndArrow>{" "}
            <ButtonCustomAndArrow
              onClick={() => {
                history.push(INFO_URL);
                setSearchType("");
              }}
            >
              Информация для участников
          </ButtonCustomAndArrow>{" "}
          </ContantMain>
          <FooterMain>
            SGK Team, 2021
          </FooterMain>
        </Left>
      </ContainerOne>
      {!searchType ? (
        <>

        </>
      ) : null}
      <FixedBlock class={searchType === "" ? 'hidden' : searchType} id="overflow-wrapper" >
        <FixedBlockContainer>
          
          {ContentMainBoard(setSearchType, searchType, history, gameId)}
        </FixedBlockContainer>
      </FixedBlock>
    </Wrapper>
  );
};
