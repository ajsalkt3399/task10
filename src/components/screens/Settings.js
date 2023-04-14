import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export default function Settings() {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <ProductsContainer>
        <Heading>Settings</Heading>
        <SubHeading>Coming Soon...!</SubHeading>
      </ProductsContainer>
    </>
  );
}
const ProductsContainer = styled.div`


  margin: 0 auto;
  padding: 40px 0;
  width: 49%;
`;
const Heading = styled.h1`
  width: 80%;

  margin: 0 auto;
  
  border-radius: 15px;
`;
const SubHeading = styled.h2``;
