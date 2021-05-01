import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-family: "Roboto", sans-serif;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  height: ${(props) => (props.height ? props.height : "62px")};
  display: block;
  outline: none;
  flex-shrink: 0;
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
  background-color: ${(props) =>
    props.disabled
      ? "#DEDEDE"
      : props.backgroundColor
      ? props.backgroundColor
      : "#FFE3BA"};
  color: ${(props) =>
    props.disabled ? "#9b9b9b" : props.textColor ? props.textColor : "#000"};
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "28px")};
  border: none;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#DEDEDE" : "#FFC266")};
  }
`;

export const ButtonCustom = ({
  children,
  width,
  fontWeight,
  textAlign,
  padding,
  height,
  mr,
  fontSize,
  ml,
  mt,
  mb,
  backgroundColor,
  textColor,
  disabled,
  type,
  onClick
}) => (
  <Btn
    width={width}
    fontWeight={fontWeight}
    textAlign={textAlign}
    padding={padding}
    fontSize={fontSize}
    height={height}
    mr={mr}
    ml={ml}
    mt={mt}
    mb={mb}
    backgroundColor={backgroundColor}
    textColor={textColor}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </Btn>
);

const BtnArrow = styled.button`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-family: "Roboto", sans-serif;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  height: ${(props) => (props.height ? props.height : "62px")};
  display: block;
  outline: none;
  flex-shrink: 0;
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "28px")};
  border: none;
  &:before {
    content: "→";
    margin-right: 10px;
  }
  &:hover{
    color: #000;
  }
`;

export const ButtonCustomAndArrow = ({
  children,
  width,
  fontWeight,
  textAlign,
  padding,
  height,
  mr,
  fontSize,
  ml,
  mt,
  mb,
  backgroundColor,
  textColor,
  disabled,
  type,
  onClick
}) => (
  <BtnArrow
    width={width}
    fontWeight={fontWeight}
    textAlign={textAlign}
    padding={padding}
    fontSize={fontSize}
    height={height}
    mr={mr}
    ml={ml}
    mt={mt}
    mb={mb}
    backgroundColor={backgroundColor}
    textColor={textColor}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </BtnArrow>
);




const ButtonCustomFormStyled = styled.button`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-family: "Roboto", sans-serif;
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : "0")};
  height: ${(props) => (props.height ? props.height : "62px")};
  display: block;
  outline: none;
  flex-shrink: 0;
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
  background-color: #786354;
  color: white;
  cursor: pointer;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "28px")};
  border: none;
  border-radius: 5px;
  &:hover{
    color: #000;
  }
  &>p{
    color: white !important;
    font-weight: 300 !important;
  }
`;

export const ButtonCustomForm = ({
  children,
  width,
  fontWeight,
  textAlign,
  padding,
  height,
  mr,
  fontSize,
  ml,
  mt,
  mb,
  backgroundColor,
  textColor,
  disabled,
  type,
  onClick
}) => (
  <ButtonCustomFormStyled
    width={width}
    fontWeight={fontWeight}
    textAlign={textAlign}
    padding={padding}
    fontSize={fontSize}
    height={height}
    mr={mr}
    ml={ml}
    mt={mt}
    mb={mb}
    backgroundColor={backgroundColor}
    textColor={textColor}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonCustomFormStyled>
);