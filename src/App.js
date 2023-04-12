import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from "./components/includes/Navbar";
import RightBar from "./components/includes/Rightbar";
import React from 'react';
import Summary from "./components/screens/summary";
import Products from "./components/screens/products";
import HotSelling from "./components/screens/HotSelling";
import ManageOrder from "./components/screens/ManageOrder";
import Payments from "./components/screens/Payments";
import Settings from "./components/screens/Settings";
// eslint-disable-next-line
import styled from "styled-components";
import NoMatch from "./components/screens/NoMatch";



function App() {
    return (
        <>
 <MainContainer  className='bg'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Summary/>}/>
            <Route path='products' element={<Products/>}/>
            <Route  path='hotselling' element={<HotSelling/>}/>
            <Route  path='manageorder' element={<ManageOrder/>}/>
            <Route  path='payments' element={<Payments/>}/>
            <Route  path='settings' element={<Settings/>}/>
            <Route path='*' element={<NoMatch/>}/>
          </Routes>
          <RightBar/>
        </Router>
    
  
     </MainContainer>
     </>
  );
}

export default App;



const MainContainer=styled.div`
position: relative;


margin: 0 auto;
display:flex;
justify-content:space-between;



`
