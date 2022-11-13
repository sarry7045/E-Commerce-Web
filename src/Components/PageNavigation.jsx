import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      /{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
  padding-left: 1.2rem;
  a {
    font-size: 3.2rem;
  }
`;

export default React.memo(PageNavigation);
