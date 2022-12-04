import styled from "styled-components";

import "./index.scss";

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.titleColor};
`;

const P = styled.p`
  color: ${(props) => props.descriptionColor};
`;

export default ({
  title,
  description,
  titleColor,
  descriptionColor,
  bgColor,
}) => (
  <Wrapper id="page-title-description-container" bgColor={bgColor}>
    <H1 titleColor={titleColor}>{title}</H1>
    {description && <P descriptionColor={descriptionColor}>{description}</P>}
  </Wrapper>
);
