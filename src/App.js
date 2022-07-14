import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled from "styled-components";
import StyledA from "./components/StyledA";
import { Rate } from "antd";

const PrimaryStyledButton = styled(StyledButton)`
  background-color: pink;
  color: ${(props) => props.color || "white"};
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);
// 이런식으로 내용을 대문자로 바꾸는 데만 사용할 수도 있음
const MyBtn = (props) => {
  <button {...props} children={`MyBtn ${props.children}`} />;
};
const StyledMyBtn = styled(MyBtn)`
  background-color: pink;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <StyledButton>버튼</StyledButton>
      <StyledButton primary>버튼</StyledButton>
      <PrimaryStyledButton>버튼</PrimaryStyledButton>
      <PrimaryStyledButton color="red">버튼</PrimaryStyledButton>
      <StyledButton as="div">버튼</StyledButton>
      {/* as props를 사용해 styled.button으로 만든 컴포넌트의 형태를 styeld.(as의 값)으로 바꿀수도 있다. */}
      <StyledButton as={UppercaseButton}>button</StyledButton>
      <StyledMyBtn>ㅇㅇㅋㅋ</StyledMyBtn>
      <StyledA>기본 경로 구글</StyledA>
      <StyledA href="https://www.naver.com">네이버</StyledA>
      <Rate allowHalf defaultValue={2.5} />
    </div>
  );
}

export default App;
