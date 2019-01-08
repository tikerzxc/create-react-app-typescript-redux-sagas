import { css } from "emotion";
import * as React from "react";
import { NavLink } from "react-router-dom";
import LayoutContainer from "../../containers/LayoutContainer";
import styled from "styled-components";
import Container from "./Container";

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <Title>{title}</Title>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink exact={true} to="/" activeClassName={HeaderLinkActive}>
          Home
        </HeaderNavLink>
        <HeaderNavLink to="/heroes" activeClassName={HeaderLinkActive}>
          Heroes
        </HeaderNavLink>
        <HeaderNavLink to="/teams" activeClassName={HeaderLinkActive}>
          Teams
        </HeaderNavLink>
      </HeaderNav>
      <HeaderRight>
        <LayoutContainer>
          {({ theme, setTheme }) => (
            <React.Fragment>
              <CurrentTheme>Current theme: {theme}</CurrentTheme>
              <ThemeSwitcherButton
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                Switch theme
              </ThemeSwitcherButton>
            </React.Fragment>
          )}
        </LayoutContainer>
      </HeaderRight>
    </HeaderInner>
  </Wrapper>
);

export default Header;

const Wrapper = styled("header")`
  padding: 0.5rem 1.5rem;
  background-color: ${(props: { theme: { colors: { brand: any } } }) =>
    props.theme.colors.brand};
  color: ${(props: { theme: { colors: { white: any } } }) =>
    props.theme.colors.white};
  font-family: ${(props: { theme: { fonts: { headings: any } } }) =>
    props.theme.fonts.headings};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${(props: { theme: { breakpoints: { lg: any } } }) =>
      props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const HeaderLeft = styled("div")`
  padding-right: 1rem;
`;

const HeaderNav = styled("nav")`
  flex: 1 1 auto;
  margin: 1rem 0;

  @media (min-width: ${(props: { theme: { breakpoints: { lg: any } } }) =>
      props.theme.breakpoints.lg}) {
    margin: 0;
  }
`;

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;
`;

const HeaderLinkActive = css`
  text-decoration: underline;
`;

const HeaderRight = styled("div")`
  padding-left: 1rem;
`;

const Title = styled("h2")`
  margin: 0;
  font-weight: 500;
`;

const CurrentTheme = styled("span")`
  margin-right: 1rem;
`;

const ThemeSwitcherButton = styled("button")`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid
    ${(props: { theme: { colors: { white: any } } }) =>
      props.theme.colors.white};
  border-radius: 3px;
  background-color: ${(props: { theme: { colors: { white: any } } }) =>
    props.theme.colors.white};
  color: ${(props: { theme: { colors: { brand: any } } }) =>
    props.theme.colors.brand};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${(props: { theme: { colors: { white: any } } }) =>
      props.theme.colors.white};
  }
`;
