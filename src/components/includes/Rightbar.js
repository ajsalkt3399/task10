import React from "react";
import styled from "styled-components";
import profile from "../../Assets/Group 38.jpg";
// import arrow from "../../../assets/Settings-1.svg";
import wooden from "../../Assets/Buy Bronx Wooden Dominoes from the Next UK online shop 1.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function RightBar() {
  return (
    <>
    <Helmet>
                
                <title>RightBar</title>
              
            </Helmet>
      <RightBarCointainer>
        <NotificationBar>
          <LeftSide>
            <BellIcon>
              <BellIconImage
                src={require("../../Assets/bell.svg").default}
              />
            </BellIcon>
            <MessageIcon>
              <MessageIconImage
                src={require("../../Assets/chat.svg").default}
              />
            </MessageIcon>
          </LeftSide>
          <RightSide>
            <ProfileIcon>
              <ProfileIconImage src={profile} />
            </ProfileIcon>
            <ArrowIcon>
              <ArrowIconImage
                src={require("../../Assets/Settings-1.svg").default}
              />
            </ArrowIcon>
          </RightSide>
        </NotificationBar>
        <ProductBar>
          <TopSection>
            <Heading>Hot SellingProducts</Heading>
            <SideHeading>See all</SideHeading>
          </TopSection>
          <ProductList>
            <ProductItem>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage src={wooden} />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText>
                    Dominoes Coffee Table Game
                  </ProductTitleText>
                  <ProductSalesText>50k Sales</ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag src={require("../../Assets/$28.jpg")} />
              </ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage src={require("../../Assets/The Top 20 BEST Gifts For RV Enthusiasts - Living Bite Sized 1.jpg")} />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText>
                    Photive Wirless Speakers
                  </ProductTitleText>
                  <ProductSalesText>42k Sales</ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag src={require("../../Assets/$28.jpg")} />
              </ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage src={require("../../Assets/Tot 55_ Korting Urbanears Multiroom Speakers Baggen, Stammen Of Lotsen Voor Vanaf €89,95 Bij IBOOD - DealsTracker_nl 1.jpg")} />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText>
                    Platttan 2 HeadPhones
                  </ProductTitleText>
                  <ProductSalesText>38k Sales</ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag src={require("../../Assets/$28.jpg")} />
              </ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage src={require("../../Assets/Aeo URBANEARS Plattan 2 Headphones 1.jpg")} />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText>
                    Solar Hand Crank Radio
                  </ProductTitleText>
                  <ProductSalesText>36k Sales</ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag src={require("../../Assets/$28.jpg")} />
              </ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductContent>
                <ProductImageContainer>
                  <ProductImage src={require("../../Assets/Emergency Solar Hand Crank Radio @ Sharper Image 2.jpg")} />
                </ProductImageContainer>
                <ProductTitle>
                  <ProductTitleText>
                    Dominoes Coffee Table Game
                  </ProductTitleText>
                  <ProductSalesText>30k Sales</ProductSalesText>
                </ProductTitle>
              </ProductContent>
              <ProductPrice>
                <PriceTag src={require("../../Assets/$28.jpg")} />
              </ProductPrice>
            </ProductItem>
          </ProductList>

          <ProductBottom>
            <LeftContainer>
              <HelpText>What can We help you with?</HelpText>
              <Chat>
                <ChatText>Chat with us</ChatText>
                <ChatIcon>
                  <ChatIconImage
                    src={require("../../Assets/Settings-1.svg").default}
                  />
                </ChatIcon>
              </Chat>
            </LeftContainer>
            <RightContainer>
              <OctionImage>
                <OctionIcon
                  src={
                    require("../../Assets/businessman-svgrepo-com (3) 1.svg")
                      .default
                  }
                />
              </OctionImage>
            </RightContainer>
          </ProductBottom>
        </ProductBar>
      </RightBarCointainer>
    </>
  );
}
const RightBarCointainer = styled.div`
  width: 30%;
  background-color: #f1f1f3;@media (max-width: 1200px) {
    
    padding-top: 110px;
    

       }
`;

const NotificationBar = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: flex-end;

  }
  align-items: center;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const BellIcon = styled(Link)`
  margin-right: 25px;
`;
const BellIconImage = styled.img`
  display: block;
  width: 100%;
`;
const MessageIcon = styled(Link)``;
const MessageIconImage = styled.img`
  display: block;
  width: 100%;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;




  @media (max-width: 1200px) {
    display: none;
  }
`;

const ProfileIcon = styled(Link)`
  width: 39px;
  
`;
const ProfileIconImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 12px;
`;
const ArrowIcon = styled(Link)`
  width: 20px;
  margin-left: 3px;
`;
const ArrowIconImage = styled.img`
  width: 100%;
  display: block;
`;
const ProductBar = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0 0 0px;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;
const Heading = styled.h2`
  font-size: 26px;
  font-family: "Poppins-Regular";
`;
const SideHeading = styled(Link)`
  font-size: 14px;
  font-family: "Poppins-Regular";
  display: block;
  text-decoration:none;
`;
const ProductList = styled.ul`
  padding: 0px;
  margin: 0px;
`;
const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

`;
const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductImageContainer = styled(Link)`
  width: 85px;
  margin-right: 25px;
`;
const ProductImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
`;
const ProductTitle = styled.div``;
const ProductTitleText = styled.h4`
  margin: 0px;
  font-family: "Poppins-Regular";
`;
const ProductSalesText = styled.small`
  font-family: "Poppins-Regular";
`;
const ProductPrice = styled(Link)`
  display: block;
  margin-top: -15px;
`;
const PriceTag = styled.img`
  dispaly: block;
  width: 100%;
`;
const ProductBottom = styled.div`
  display: flex;
 justify-content:space-around; 
 
  margin: 0 auto;
`;
const LeftContainer = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  

`;
const HelpText = styled.h4`
  font-size: 20px;
  font-family: "Poppins-Regular";
`;
const Chat = styled(Link)`
  display: flex;
  list-style: none;
  text-decoration: none;
  align-items: center;
  &:hover{
    // transition: 2s;
    transform:translateX(6px);
  }
  
`;
const ChatText = styled.h4`
  font-size: 16px;
  font-family: "Poppins-Regular";
`;
const ChatIcon = styled.small`
  display: block;
  margin-left: 10px;
  transform: rotate(-90deg);
  width: 17px;
  margin-left: 4px;
`;
const ChatIconImage = styled.img`
  display: block;
  width: 100%;
  filter: invert(8%) sepia(33%) saturate(6876%) hue-rotate(235deg) brightness(90%) contrast(124%);

  
`;
const RightContainer = styled.div`
  width: 35%;
  margin-top: 115px;
`;
const OctionImage = styled.div`
  width: 100px;
`;
const OctionIcon = styled.img`
  display: block;
  width: 100%;
`;
