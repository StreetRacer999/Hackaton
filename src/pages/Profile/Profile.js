import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";
import { ButtonCustom } from "../../components/ButtonCustom";
import { Input, InputProfile } from "../../components/InputCustom";
import { MAIN_URL } from "../../constants/routes";
import { getProfile, getSgf, getFullLog } from "../../store/Profile/actions";

const Wrapper = styled.div`
height: 100vh;
position: relative;
display: flex;
align-items: center;
`;

const ContainerOne = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 120px 0px;
    max-height: 100vh;
    overflow-y: scroll;
`;

const Container = styled.div`
background-color: #786354;
width: 50%;
margin: 0 auto;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 120px 0px;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
`;



const UserProfileSpan = styled.span`
  font-size: 24px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 27px;
`;

const GameName = styled.span`
font-size: 24px;
line-height: 22px;
color: #fff;
`;

const Label = styled.label`
  color: #fff; 
  font-size: 24px;
  line-height: 40px;

`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 635px;
  width: 100%;
  margin-bottom: 70px;
`;
const InfoPlayer = styled.div``;

const Left = styled.div`
  display:flex;
  flex-direction:column;
  padding-right: 20px;
  border-right: 2px dashed #000000;
`;

const UserVs = styled.div`
  margin-bottom:30px;
  display: flex;
  align-items: center;
  `;
const EnemyVs = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

const GameHistory = styled.div`
  max-height:86vh;
  max-width: 635px;
  width: 100%;
  display:flex;
  flex-direction:column;

`;

const Avatar = styled.img`
  width: 75px;
  height: 75px;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
const Pts = styled.p`
  color: #c8d7b5;
  font-size: 12px;
  line-height: 14px;
`;
const Span = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => (props.winner ? "#C8D7B5" : "#B69094")};
`;
const ScoreLeft = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: ${(props) => (props.winner ? "#C8D7B5" : "#DD3F65")};
  margin-right: 5px;
`;
const ScoreRight = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: ${(props) => (props.winner ? "#86C13A" : "#B69094")};
  margin-left: 5px;
  margin-right: 16px;
`;
const AvatarHistory = styled.img`
  width: 90px;
  margin-right: 15px;
`;

const ButtonDownloadFile = styled.div`

  max-width: 220px;
  font-weight: 400;
  text-align: center;
  font-family: "Roboto",sans-serif;
  padding: 10px 20px;
  
  outline: none;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background-color: #786354;
  border-radius:5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  border: none;
    margin-bottom: 15px;
  
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const GameHistoryItem = styled.div`

  border-radius: 5px;
  width: 100%;
  background: ${(props) => (props.winner ? "#efffda" : "transparent")};
  border: 2px dashed #000000;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const InfoHistory = styled.div``;

const TriangleLeft = styled.div`
  border: 20px solid transparent;
  border-right: 20px solid ${(props) => (props.winner ? "#C8D7B5" : "#DD3F65")};
  margin-right: 16px;
`;
const TriangleRight = styled.div`
  border: 20px solid transparent;
  border-left: 20px solid ${(props) => (props.winner ? "#86C13A" : "#B69094")};
  margin-right: 16px;
`;

const InputBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Logotype = styled.img`
  height: auto;
  width: 60px;
  margin-right: 20px
`;

const UserProfileInfo = styled.div`
  display:flex;
  align-item:center;
  margin-bottom: 35px;
  margin-top: 20px;
`;

const NickName = styled.span`
  color: #fff;
  font-size: 32px;
`;


const PlayerLvl = styled.span`
font-size: 24px;
color: #FFFFFF;
`;

const UserBlock = styled.div`
  display:flex;
  flex-direction:column;
  margin-left: 15px;
`;

const GameHeader = styled.div`
  display:flex;
  align-item:center;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const GameHeaderTitle = styled.h2`
font-size: 24px;
line-height: 40px;
color: #000000;

`;



const Profile = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const playerInfo = useSelector((state) => state.profile.userProfile.user);

  const gameHistoryItems =
    playerInfo?.games_history.map((item, i) => {
      return item.scoreOpponent <= item.score ? (
          <GameHistoryItem key={i} winner>
            <Left>
              <AvatarHistory alt="avatar" src={item.player.avatar} />
              <InfoHistory>
                <Name>{item.player.nickname}</Name>
                <Pts>{item.player.pts} / {item.player.position+'th'}</Pts>
              </InfoHistory>

              <AvatarHistory alt="avatar" src={item.player.avatar} />
              <InfoHistory>
                <Name>{item.player.nickname}</Name>
                <Pts>{item.player.pts} / {item.player.position+'th'}</Pts>
              </InfoHistory>


            </Left>
            <Right>
              <TriangleLeft winner />
              <ScoreLeft winner>{item.scoreOpponent}</ScoreLeft>
              <Span winner>/</Span>
              <ScoreRight winner>{item.score}</ScoreRight>
              <TriangleRight winner />
            </Right>
            <ButtonRow>
              <ButtonDownloadFile onClick={()=>dispatch(getSgf(item.game_id))}>
                Файл
              </ButtonDownloadFile>
              <ButtonDownloadFile onClick={()=>dispatch(getFullLog(item.game_id))}>
                Лог
              </ButtonDownloadFile>
            </ButtonRow>
          </GameHistoryItem>) : (
          <GameHistoryItem key={i}>
            <Left>
              <UserVs>
                <AvatarHistory alt="avatar" src={playerInfo.avatar} />
                <InfoHistory>
                  <Name>{playerInfo.nickname}</Name>
                </InfoHistory>
              </UserVs>
              
              <EnemyVs>
                <AvatarHistory alt="avatar" src={item.player.avatar} />
                <InfoHistory>
                  <Name>{item.player.nickname}</Name>
                </InfoHistory>
              </EnemyVs>
            </Left>
            <Right>
              <ScoreLeft>{item.scoreOpponent}</ScoreLeft>
              <ScoreRight>{item.score}</ScoreRight>
            </Right>
            <ButtonRow>
              <ButtonDownloadFile onClick={()=>dispatch(getSgf(item.game_id))}>
                Файл
              </ButtonDownloadFile>
              <ButtonDownloadFile onClick={()=>dispatch(getFullLog(item.game_id))}>
                Лог
              </ButtonDownloadFile>
              <br />
              <ButtonDownloadFile>
                Аналитика
              </ButtonDownloadFile>
            </ButtonRow>
          </GameHistoryItem>
      )
    });

  return (
    <Wrapper>
      <Container>
      <Info>
        <InfoHeader>
        <Logotype alt="logo" src={Logo} />
        <GameName>ГоСтратег</GameName>
        </InfoHeader>
        <UserProfileSpan>Профиль пользователя</UserProfileSpan>
        <UserProfileInfo>
        <Avatar alt="avatar" src={playerInfo?.avatar} />
          <UserBlock>
          <NickName>
          {playerInfo?.nickname}
          </NickName>
          <PlayerLvl>начинающий игрок</PlayerLvl>
          </UserBlock>
        </UserProfileInfo>
        <InfoPlayer>
          <InputBlock>
          <Label>E-mail:</Label>
          <InputProfile
            
            
            disabled
            value={playerInfo?.email}
          />
          </InputBlock>
          <InputBlock>
          <Label>Имя пользователя:</Label>
          <InputProfile
           
           
            disabled
            value={playerInfo?.nickname}
            
          /></InputBlock>

          <InputBlock>
          <Label>Рейтинг:</Label>
          <Input   disabled value={playerInfo?.pts} />
          </InputBlock>

        </InfoPlayer>
      </Info>

      </Container>
      <ContainerOne>
        <GameHeader>
          <GameHeaderTitle>Партии пользователя</GameHeaderTitle>
          <ButtonCustom
            width="30%"
            onClick={() => {
              history.push(MAIN_URL);
            }}
          >
        В меню
      </ButtonCustom>
      </GameHeader>
      <GameHistory>
        {gameHistoryItems}
      </GameHistory>

      </ContainerOne>
    </Wrapper>




  );
};

export default Profile;
