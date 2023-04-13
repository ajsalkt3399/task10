import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../Assets/Group 38.jpg";
import styled from "styled-components";
import { Helmet } from "react-helmet";
// eslint-disable-next-line
import { IconBase } from "react-icons";

export default function NavBar() {
  const [navClose, setNavClose] = useState(false);
  //   onClick={() => setNavClose(!navClose)}
  return (
    <>
      <Helmet>
        <title>navbar</title>
      </Helmet>
      <Wrapper>
        <Header>
          <Menu onClick={() => setNavClose(!navClose)}>
            <MenuIcon src={require("../../Assets/menu.svg").default} />
          </Menu>
          <NavLogo>
            <Logo src={require("../../Assets/logo.svg").default} />
          </NavLogo>
          <NavContainer className={navClose ? "navclose" : ""}>
          <Menu onClick={() => setNavClose(!navClose)}>
            <MenuIcon src={require("../../Assets/Cross.svg").default} />
          </Menu>
            <NavContent>
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/"
                >
                  Summary
                </NavItem>
                <NavImage to="/">
                  <Img src={require("../../Assets/Book.svg").default} />
                </NavImage>
              </NaveItems>

              
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/products"
                >
                  Products
                </NavItem>
                <NavImage to="products">
                  <Img src={require("../../Assets/slide.svg").default} />
                </NavImage>
              </NaveItems>
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/hotselling"
                >
                  Hot Selling
                </NavItem>
                <NavImage to="hotselling">
                  <Img src={require("../../Assets/fire.svg").default} />
                </NavImage>
              </NaveItems>
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/manageorder"
                >
                  Manage Order
                </NavItem>
                <NavImage to="manageorder">
                  <Img src={require("../../Assets/oder.svg").default} />
                </NavImage>
              </NaveItems>
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/payments"
                >
                  Payments
                </NavItem>
                <NavImage to="payments">
                  <Img src={require("../../Assets/Wallet.svg").default} />
                </NavImage>
              </NaveItems>
              <NaveItems>
                <NavItem
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/settings"
                >
                  Settings
                </NavItem>
                <NavImage to="settings">
                  <Img src={require("../../Assets/Settings.svg").default} />
                </NavImage>
              </NaveItems>
            </NavContent>
            <NavBottom>
              <NavBottomItems>
                <NavBottomImage>
                  <BottomImg
                    src={require("../../Assets/Group 11.svg").default}
                  />
                </NavBottomImage>
                <Content>Power up your Business</Content>

                <ButtonContainer>
                  <SideHeading>Go Pro!</SideHeading>
                  <ImageContainer>
                    <Buttonimge
                      src={require("../../Assets/Settings-1.svg").default}
                    />
                  </ImageContainer>
                </ButtonContainer>
              </NavBottomItems>
            </NavBottom>
          </NavContainer>
          <ProfileIcon>
              <ProfileIconImage src={profile} />
            </ProfileIcon>
        </Header>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #d3d3d3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 10px 0px;
    width: 100%;
  }
  width: 20%;
  border-right: 2px solid #d3d3d3;
`;
const Menu = styled.div``;
const MenuIcon = styled.img`
  width: 25px;
  height: 25px;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;
const Header = styled.header`
  position: relative;

  display: flex;
  padding: 40px;
  flex-direction: column;

  background: #fff;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 40px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;
const NavContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 30px;
  transition: 200ms ease-in-out;
  background: #fff;
  transform: translateX(0);
  @media (max-width: 1200px) {
    padding: 40px;
    transform: translateX(-100%);
    position: fixed;
    z-index: 3;
    overflow-y: auto;
    top: 0;
    left: 0;
  }
  &.navclose {
    transform: translateX(0);
  }
`;
const NavLogo = styled(Link)`
  @media (max-width: 1200px) {
    margin: 30px 0px;
  }
  margin-top: 15px;
  display: block;
  z-index: 3;
`;
const Logo = styled.img`
  display: block;
`;
const NavContent = styled.ul`
  padding: 40px 0px;
`;
const NaveItems = styled.li`
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;
`;
const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #5a5a5a;
  font-family: "Poppins-SemiBold";
  &:hover {
    color: #333988;
  }
  &.active {
    color: #333988;
  }
`;
const NavImage = styled(NavLink)`
  display: block;
  &:hover {
    filter: invert(8%) sepia(33%) saturate(6876%) hue-rotate(235deg)
      brightness(90%) contrast(124%);
  }
  &.active {
    filter: invert(8%) sepia(33%) saturate(6876%) hue-rotate(235deg)
      brightness(90%) contrast(124%);
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const NavBottom = styled.div`
  background-color: #e6f4ff;
  padding: 20px;
  border-radius: 20px;
`;
const NavBottomItems = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const NavBottomImage = styled.div`
  padding: 20px;
`;
const BottomImg = styled.img`
  display: block;
  width: 100%;
`;
const Content = styled.div`
  text-align: center;
  font-family: "Poppins-Bold";
  font-size: 18px;
  margin-bottom: 30px;
`;
const ButtonContainer = styled.button`
  margin-top: 30px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #333988;
  border-radius: 15px;
  border: none;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    // transition: 2s;
    transform: translateX(6px);
  }
`;
const SideHeading = styled.p`
  margin-right: 5px;
  color: #fff;
  font-weight: bold;
`;
const ImageContainer = styled.div`
  width: 20%;
  filter: invert(100%);
  transform: rotate(-90deg);
`;
const Buttonimge = styled.img`
  width: 100%;
  display: block;
`;
const ProfileIcon = styled(Link)`
  display: none;
  width: 39px;
  @media (max-width: 1200px) {
    display: block;
  }
`;
const ProfileIconImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;


















