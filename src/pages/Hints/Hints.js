import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../Main/components/Header";
import { useDispatch, useSelector } from "react-redux";
import table from '../../assets/img/table1.jpg'
import table2 from '../../assets/img/table2.jpg'
import table3 from '../../assets/img/table3.jpg'
import table3_1 from '../../assets/img/table3-1.jpg'
import table3_2 from '../../assets/img/table3-2.jpg'
import table4 from '../../assets/img/table4.jpg'
import table4_1 from '../../assets/img/table4-1.png'
import table4_2 from '../../assets/img/table4-2.png'
import table5 from '../../assets/img/table5.png'
import table5_1 from '../../assets/img/table5-1.png'
import table5_2 from '../../assets/img/table5-2.png'
import table6 from '../../assets/img/table6.png'
import table7 from '../../assets/img/table7.png'
import table8 from '../../assets/img/table8.png'
import table8_1 from '../../assets/img/table8-1.png'
import table8_2 from '../../assets/img/table8_2.png'
import table8_3 from '../../assets/img/table8-3.png'
import table9 from '../../assets/img/table9.png'

import { ButtonCustom } from "../../components/ButtonCustom";
import { MAIN_URL } from "../../constants/routes";

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-top: 200px;
  flex-direction: column;
`;

const H1 = styled.h1`

`;
const H2 = styled.h2`
    margin:20px 0;
`;
const HeaderText = styled.p`
margin: 20px 0;

`;

const H2Subtitle = styled.p`
max-width:750px;
margin-bottom: 20px;
`;




const Bold = styled.p``;


export const Hints = ({ history }) => {

  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('')


  return (
    <Wrapper>
        <H1>Описание подсказок</H1>

        <HeaderText>В процессе этого курса Вы узнаете всё необходимое, чтобы самостоятельно играть в Го.</HeaderText>



        <H2>Лучший ход</H2>


        <H2Subtitle>
            Данный сценарий выдаст вам оптимальный ход, исходя из ситуации на доске
        </H2Subtitle>


        <H2>
            Лучший ход соперника
        </H2>


        <H2Subtitle>
        ……………………………………      
        </H2Subtitle>



 

        <H2>Развитие игры на 2 хода вперед</H2>
        <H2Subtitle>
            В настоящий момент времени  рассчитывает и показывает 2 лучших хода подряд
        </H2Subtitle>

        <H2>
            Плохой ход соперника
        </H2>

        
        <H2Subtitle>
            …………………………………….
        </H2Subtitle>






        <H2>Тепловая карта всей доски. Детализированная </H2>

        <H2Subtitle>
        ……………………………………        
        </H2Subtitle>
        

        <H2>Тепловая карта всей доски. Менее детализированная </H2>

        <H2Subtitle>
        ……………………………………        
        </H2Subtitle>



        <H2>В какой четверти доски будет лучший ход соперника? </H2>

        <H2Subtitle>
        ……………………………………        
        </H2Subtitle>


        <H2>В какой половине доски будет лучший ход соперника? </H2>

        <H2Subtitle>
        ……………………………………        
        </H2Subtitle>



        <H2>Показать лучший из заданных 2 ходов соперника </H2>

        <H2Subtitle>
        ……………………………………        
        </H2Subtitle>


        <H2>В какой четверти доски сейчас лучший ход? </H2>

        <H2Subtitle>
         Алгоритм выбирает наиболее перспективную ¼ часть доски и предлагает ход     
        </H2Subtitle>


        <H2>В какой половине доски сейчас лучший ход?</H2>

        <H2Subtitle>
            Алгоритм выбирает наиболее перспективную 1/2 часть доски и предлагает ход     
        </H2Subtitle>


        <H2>Тепловая карта 1-й четверти доски</H2>

        <H2Subtitle>
            ………………………………….
        </H2Subtitle>


        <H2>Тепловая карта 1-й и 2-й четвертей доски</H2>

        <H2Subtitle>
            ………………………………….
        </H2Subtitle>

        <H2>Какой перевес в очках на данный момент? </H2>

        <H2Subtitle>
            ИИ рассчитывает очки каждого игрока и выводит перевес
        </H2Subtitle>

        <H2> Кто побеждает на данный момент?</H2>

        <H2Subtitle>
            ИИ считает статистику партии на данный момент и выводит текущего победителя
        </H2Subtitle>
        <ButtonCustom
        width="327px"
        position="true"
        onClick={() => {
          history.push(MAIN_URL);
        }}
      >
        В меню
      </ButtonCustom>
        </Wrapper>
  );
};

export default Hints;
