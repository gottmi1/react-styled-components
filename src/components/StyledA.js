import styled from "styled-components";

const StyledA = styled.a.attrs((props) => ({
  target: "_blank",
  href: props.href ? props.href : "https://google.com",
  // 디폴트 값을  google로 주기
}))`
  color: violet;
`;
// .attrs() 를 뒤에 붙여주면 props나 어트리부트도 설정해줄 수 있어짐.

export default StyledA;
