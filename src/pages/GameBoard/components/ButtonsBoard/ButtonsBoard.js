


import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
margin-top: 30px;
background-color: #EBEBEB;
`;


const ButtonTabs = styled.span`
    padding: 10px 20px;
    font-size: 22px;
    display: inline-block;
`;

const TabsHelp = ({ hint,stepColor, enemyPass, yourColor, you, opponent, turns, stepMain, stepTwo, times,
    setHint,
    setResign }) => {
  return (
    <Wrapper>
          <ButtonTabs onClick={() => setHint('hint')}>Подсказки</ButtonTabs>
          <ButtonTabs onClick={() => setHint('123')}>Сценарии</ButtonTabs>
          <ButtonTabs onClick={() => setHint('')}>Ход игры</ButtonTabs>
    </Wrapper>
  );
};

export default TabsHelp;
