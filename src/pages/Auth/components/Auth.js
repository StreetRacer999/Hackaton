import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Logo from "../../../assets/img/logo.png";
import { ButtonCustom, ButtonCustomAndArrow, ButtonCustomForm } from "../../../components/ButtonCustom";
import { Input } from "../../../components/InputCustom";
import { regSubmit, loginSubmit } from "../../../store/Auth/actions";

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
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
  width: 50%;
  margin: 0 auto;
  height: 100%;
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
const Auth = () => {
  const [activeTab, setActiveTab] = useState("reg");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (activeTab === "reg") {
      if (!email || !nickname) {
        setError("Заполните все поля");
      } else {
        setError("");
        await dispatch(regSubmit(nickname, email));
      }
    }
    if (activeTab === "auth") {
      if (!email || !password) {
        setError("Заполните все поля");
      } else {
        setError("");
        // setToken(register(email, nickname)
        await dispatch(loginSubmit(password, email));
      }
    }
  };

  return (
    <Wrapper>
      <ContainerOne>
        <Left>
          <Titlemain>
          <Top>
          <Logotype alt="logo" src={Logo} />
          ГоСтратег
        </Top>
            Эффективная система подсказок в игре Го
          </Titlemain>
          <ContantMain>
            <ButtonCustomAndArrow >Подсказки</ButtonCustomAndArrow>
            <ButtonCustomAndArrow >Обучение</ButtonCustomAndArrow>
            <ButtonCustomAndArrow >Интересные партии</ButtonCustomAndArrow>
          </ContantMain>
          <FooterMain>
            SGK Team, 2021
          </FooterMain>
        </Left>
      </ContainerOne>
      <Container>
        <Left>
          <Hello>
            Привет!
          </Hello>
          <DecriptionOne>
            Добро пожаловать в наше коммьюнити
          </DecriptionOne>
          <DecriptionTwo>
            Чтобы продолжить, нужно быть авторизованным пользователем
          </DecriptionTwo>
          
        <Form onSubmit={handleAuth}>
         <Label>
            E-mail или имя пользователя
          </Label>
          <Input
            mt={20}
            type="email"
            placeholder="Email"
            onChange={setEmail}
            value={email}
            name="email"
          />
          {activeTab === "reg" ? (
           <Label>
           Имя пользователя
         </Label>
          ) : (
            <Label>
            Пароль
          </Label>
          )}
          {activeTab === "reg" ? (
            <Input
              mt={10}
              mb={30}
              placeholder="Nickname"
              onChange={setNickname}
              value={nickname}
              errorMessage={error}
              name="nickname"
            />
          ) : (
            <Input
              mt={10}
              mb={30}
              placeholder="Password"
              onChange={setPassword}
              value={password}
              errorMessage={error}
              name="password"
              type="password"
            />
          )}
          <ButtonCustomForm type="submit">
          {activeTab === "reg" ? (
            <Span>
              Зарегаться
            </Span>
          ) : (
            <Span>
              Войти
            </Span>
          )}

          </ButtonCustomForm>
          <Tabs>
          {activeTab === "reg" ? (
            <Span>
              Зарегистрированны уже?
            </Span>
          ) : (
            <Span>
              Ещё не зарегитсрированны?
            </Span>
          )}

           {activeTab === "reg" ? (
            <Tab
            onClick={() => setActiveTab("auth")}
            active={activeTab !== "auth"}
          >
            Войти
          </Tab>
          ) : (
            <Tab
              onClick={() => setActiveTab("reg")}
              active={activeTab !== "reg"}
            >
              Зарегистрироваться
            </Tab>
          )}

          </Tabs>
        </Form>
        </Left>
      </Container>
    </Wrapper>
  );
};

export default Auth;
