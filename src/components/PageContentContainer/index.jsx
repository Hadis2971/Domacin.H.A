import "./index.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  top: ${(props) => (props.homePage ? "0px" : "250px")};
`;

export default ({ children, homePage }) => (
  <Wrapper id="page-content-container" homePage={homePage}>
    {children}
  </Wrapper>
);
