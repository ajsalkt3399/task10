import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

export default function Payments() {
  return (
    <>
     <Helmet>
                
                <title>Payments</title>
              
            </Helmet>
    <ProductsContainer>
      
    <Heading>Payments</Heading> 
    <SubHeading>Coming Soon...!</SubHeading>
    
    </ProductsContainer>
    </>
)
}
const ProductsContainer=styled.div`
width: 80%;

margin: 0 auto;
padding: 40px 0;
width: 49%;
`;
const Heading = styled.h1`
width: 80%;

margin: 0 auto;
background-color: #f1f1f3;
border-radius: 15px;
`;
const SubHeading = styled.h2`


`
