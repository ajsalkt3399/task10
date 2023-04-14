import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
export default function Products() {
  return (
    <>
       <Helmet>
                
                <title>Products</title>
              
            </Helmet>

    <ProductsContainer>
      
      <Heading>Products</Heading> 
      <SubHeading>Coming Soon...!</SubHeading>
      
      </ProductsContainer>
      </>
  )
}
const ProductsContainer=styled.div`
width: 49%;

margin: 0 auto;
padding: 40px 0;

`;
const Heading = styled.h1`
width: 80%;

margin: 0 auto;

border-radius: 15px;
`;
const SubHeading = styled.h2`

  
`

