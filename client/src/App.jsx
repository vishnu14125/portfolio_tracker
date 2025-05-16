 
// import MasterContainer from './containers/MasterContainer';

// function App() {
//   return (
//     <>
//       <MasterContainer />
//     </>
//   );
//   }

// export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterContainer from './containers/MasterContainer';
import Login from './components/sharedComponents/Login';
import Signup from './components/sharedComponents/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/*" element={<MasterContainer />} /> {/* Catch-all for internal app routes */}
      </Routes>
    </Router>
  );
}

export default App;
