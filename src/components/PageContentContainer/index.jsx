import "./index.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  top: ${(props) => props.topPosition};
`;

export default ({ children, topPosition }) => (
  <Wrapper id="page-content-container" topPosition={topPosition}>
    {children}
  </Wrapper>
);
