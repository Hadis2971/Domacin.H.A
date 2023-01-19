import styled from "styled-components";

import Footer from "../Footer";

import "./index.scss";

const Wrapper = styled.div`
  top: ${(props) => (props.homePage ? "0px" : "250px")};
`;

export default ({ children, homePage }) => {
  const dispatchCloseSlideShoppingListEvent = () => {
    document.dispatchEvent(new Event("close-on-document-click"));
  };

  return (
    <Wrapper
      id="page-content-container"
      homePage={homePage}
      onClick={dispatchCloseSlideShoppingListEvent}
    >
      {children}

      <Footer />
    </Wrapper>
  );
};
