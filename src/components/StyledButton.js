import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  border: 0;

  ${(props) =>
    props.primary &&
    css`
      background-color: blue;
    `}/* 이 컴포넌트가 primary라는 props를 가지면 이렇게 나오도록  */
`;

export default StyledButton;
