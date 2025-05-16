// import React, {useState, useEffect} from 'react';
// import {getCurrentStocks} from '../services/ApiServices';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./master.css"
// import Header from "../components/sharedComponents/Header";
// import NavBar from "../components/sharedComponents/NavBar";
// import StockMarketContainer from './StockMarketContainer';
// import PortfolioContainer from "./PortfolioContainer";
// // import {fetchedData} from '../components/stockMarketComponents/fetchedData';
// // import { fetchedData, stockPrices, stockDetails } from '../components/stockMarketComponents/fetchedData.jsx';
// import { fetchedData, fetchedStockPrices, fetchedStockDetails } from '../components/stockMarketComponents/fetchedData.js';


// import TopBar from '../components/sharedComponents/TopBar.jsx';

// import SideBar from '../components/sharedComponents/SideBar';
// import Footer from '../components/sharedComponents/Footer';

// const MasterContainer = () => {
//     const [apiData, setApiData] = useState(fetchedData);
//     // const [apiData, setApiData] = useState(null);
//     const [historicalPrices, setHistoricalPrices] = useState(null);


//     useEffect(() => {
//       getCurrentStocks()
//       .then(data => setApiData(data))
//     },[]);


//     const handleHistPrices = (histPricesObject) => {
//       setHistoricalPrices(histPricesObject)
//     };
//     console.log(historicalPrices)
  
//     return (
//     <>
//       <Router>
//         <TopBar/>
//           <div className="sidebar-content-container">
//             <SideBar/>
//             <Routes>
//               <Route path='/' element={<PortfolioContainer apiData={apiData}/>} />
//               <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices}/>} />
//             </Routes>
//      {/* <div className="main">
//      <Header />
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
//           <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} historicalPrices={historicalPrices} />} />
//         </Routes>
//       </Router>
//      </div> */}
    
//      </div>
//      {/* <Footer /> */}
//      </Router>   
//     </>
//     );
// }
 
// export default MasterContainer;

// import React, { useState, useEffect } from 'react';
// import { getCurrentStocks } from '../services/ApiServices';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./master.css"
// import Header from "../components/sharedComponents/Header";
// import NavBar from "../components/sharedComponents/NavBar";
// import StockMarketContainer from './StockMarketContainer';
// import PortfolioContainer from "./PortfolioContainer";
// import { fetchedData, fetchedStockPrices, fetchedStockDetails } from '../components/stockMarketComponents/fetchedData.js';

// import TopBar from '../components/sharedComponents/TopBar.jsx';
// import SideBar from '../components/sharedComponents/SideBar';
// import Footer from '../components/sharedComponents/Footer';

// const MasterContainer = () => {
//     const [apiData, setApiData] = useState(fetchedData);
//     const [historicalPrices, setHistoricalPrices] = useState(null);

//     useEffect(() => {
//         getCurrentStocks()
//             .then(data => setApiData(data))
//     }, []);

//     const handleHistPrices = (histPricesObject) => {
//         setHistoricalPrices(histPricesObject);
//     };

//     return (
//         <>
//             <Router>
//                 <TopBar />
//                 <div className="sidebar-content-container">
//                     <SideBar />
//                     <Routes>
//                         <Route path='/' element={<PortfolioContainer apiData={apiData} />} />
//                         <Route path='/stockmarket' element={<StockMarketContainer
//                             stocks={apiData}
//                             handleHistPrices={handleHistPrices}
//                             historicalPrices={historicalPrices} />} />
//                     </Routes>
//                 </div>
//             </Router>
//         </>
//     );
// }

// export default MasterContainer;

// import React, { useState, useEffect } from 'react';
// import { getCurrentStocks } from '../services/ApiServices';
// import "./master.css";
// import TopBar from '../components/sharedComponents/TopBar.jsx';
// import SideBar from '../components/sharedComponents/SideBar.jsx';
// import StockMarketContainer from './StockMarketContainer.jsx';
// import PortfolioContainer from "./PortfolioContainer.jsx";
// import { fetchedData } from '../components/stockMarketComponents/fetchedData.js';

// const MasterContainer = () => {
//     const [apiData, setApiData] = useState(fetchedData);
//     const [historicalPrices, setHistoricalPrices] = useState(null);

//     useEffect(() => {
//         getCurrentStocks()
//             .then(data => setApiData(data))
//             .catch(err => console.log("API Error:", err));
//     }, []);

//     const handleHistPrices = (histPricesObject) => {
//         setHistoricalPrices(histPricesObject);
//     };

//     // Optional: Decide what to show based on props or use context
//     return (
//         <>
//             <TopBar />
//             <div className="sidebar-content-container">
//                 <SideBar />
//                 {/* You may render a default container or pass control to App.jsx routing */}
//                 <PortfolioContainer apiData={apiData} />
//             </div>
//         </>
//     );
// };

// export default MasterContainer;

// import React, {useState, useEffect} from 'react';
// import {getCurrentStocks} from '../services/ApiServices';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./master.css"
// import Header from "../components/sharedComponents/Header";
// import NavBar from "../components/sharedComponents/NavBar";
// import StockMarketContainer from './StockMarketContainer';
// import PortfolioContainer from "./PortfolioContainer";
// // import {fetchedData} from '../components/stockMarketComponents/fetchedData';
// import { fetchedData, fetchedStockPrices, fetchedStockDetails } from '../components/stockMarketComponents/fetchedData';

// import TopBar from '../components/sharedComponents/TopBar';

// import SideBar from '../components/sharedComponents/SideBar';
// import Footer from '../components/sharedComponents/Footer';

// const MasterContainer = () => {
//     const [apiData, setApiData] = useState(fetchedData);
//     // const [apiData, setApiData] = useState(null);
//     const [historicalPrices, setHistoricalPrices] = useState(null);


//     useEffect(() => {
//       getCurrentStocks()
//       .then(data => setApiData(data))
//     },[]);


//     const handleHistPrices = (histPricesObject) => {
//       setHistoricalPrices(histPricesObject)
//     };
//     console.log(historicalPrices)
  
//     return (


//     <>


//       <Router>
//         <TopBar/>
//           <div className="sidebar-content-container">
//             <SideBar/>
//             <Routes>
//               <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
//               <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices}/>} />
//             </Routes>
//      {/* <div className="main">
//      <Header />
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route exact path='/' element={<PortfolioContainer apiData={apiData}/>} />
//           <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} historicalPrices={historicalPrices} />} />
//         </Routes>
//       </Router>
//      </div> */}
    
//      </div>
//      {/* <Footer /> */}
//      </Router>
       
      
    

       
       
       
    
        
//     </>
//     );
// }
 
// export default MasterContainer;

// import React, { useState, useEffect } from 'react';
// import { getCurrentStocks } from '../services/ApiServices';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./master.css";
// import Header from "../components/sharedComponents/Header";
// import NavBar from "../components/sharedComponents/NavBar";
// import StockMarketContainer from './StockMarketContainer';
// import PortfolioContainer from "./PortfolioContainer";
// import { fetchedData, fetchedStockPrices, fetchedStockDetails } from '../components/stockMarketComponents/fetchedData';
// import TopBar from '../components/sharedComponents/TopBar';
// import SideBar from '../components/sharedComponents/SideBar';
// import Footer from '../components/sharedComponents/Footer';

// const MasterContainer = () => {
//     const [apiData, setApiData] = useState(fetchedData);
//     const [historicalPrices, setHistoricalPrices] = useState(null);

//     useEffect(() => {
//         getCurrentStocks()
//             .then(data => setApiData(data));
//     }, []);

//     const handleHistPrices = (histPricesObject) => {
//         setHistoricalPrices(histPricesObject);
//     };

//     return (
//         <Router>
//             <TopBar />
//             <div className="sidebar-content-container">
//                 <SideBar />
//                 <Routes>
//                     <Route exact path='/' element={<PortfolioContainer apiData={apiData} />} />
//                     <Route path='/stockmarket' element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} />} />
//                 </Routes>
//             </div>
//             {/* <Footer /> */}
//         </Router>
//     );
// };
// export default MasterContainer;

import React, { useState, useEffect } from 'react';
import { getCurrentStocks } from '../services/ApiServices';
import { Routes, Route } from "react-router-dom";
import "./master.css";
import StockMarketContainer from './StockMarketContainer';
import PortfolioContainer from "./PortfolioContainer";
import { fetchedData } from '../components/stockMarketComponents/fetchedData';
import TopBar from '../components/sharedComponents/TopBar';
import SideBar from '../components/sharedComponents/SideBar';

const MasterContainer = () => {
  const [apiData, setApiData] = useState(fetchedData);
  const [historicalPrices, setHistoricalPrices] = useState(null);

  useEffect(() => {
    getCurrentStocks().then(data => setApiData(data));
  }, []);

  const handleHistPrices = (histPricesObject) => {
    setHistoricalPrices(histPricesObject);
  };

  return (
    <>
      <TopBar />
      <div className="sidebar-content-container">
        <SideBar />
        <Routes>
          <Route path="/" element={<PortfolioContainer apiData={apiData} />} />
          <Route path="/stockmarket" element={<StockMarketContainer stocks={apiData} handleHistPrices={handleHistPrices} />} />
        </Routes>
      </div>
    </>
  );
};

export default MasterContainer;



