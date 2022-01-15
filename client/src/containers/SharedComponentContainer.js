//Below imports to be copied into MasterContainer once Portfolio and StockMarket containers functional.

import Header from "../components/sharedComponents/Header";
import NavBar from "../components/sharedComponents/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StockMarketContainer from "./StockMarketContainer";
import PortfolioContainer from "./PortfolioContainer";

const SharedComponentContainer = () => {
    
    //All of the below to be copied into MasterContainer once Portfolio and StockMarket containers functional.
   
   const title = "Welcome to the Portfolio Tracker App"
   
   return (
        <>
            <hr/>
            <p>This is the Shared Component Container - a dummy container </p>
            <Header title={ title }/>
            <Router>
              <NavBar />
              <Routes>
                <Route exact path='/' element={<StockMarketContainer />} />
                <Route path='/portfolio' element={<PortfolioContainer />} />
              </Routes>
            </Router>
            <hr/>
         </>
     )
}

export default SharedComponentContainer;