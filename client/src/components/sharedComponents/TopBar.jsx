// import "./topbar.css"
// import {MdNotificationsNone, MdOutlineSettings} from 'react-icons/md'
// import {CgProfile} from 'react-icons/cg'

// const TopBar = () => {
//     return ( 

//         <div className="topbar">
//             <div className="topbarWrapper">
//                 <div className="topLeft">
//                     <span className="logo">Portfolio Tracker</span>
//                     </div>
//         <div className="topRight">
//           <div className="topbarIconContainer">
//             <MdNotificationsNone size="30px"/>
//             <span className="topIconBadge">2</span>
//           </div>
//           <div className="topbarIconContainer">
//             <MdOutlineSettings size="30px"/>
//           </div>
//           <div className="topbarIconContainer">
//             <CgProfile size="30px"/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
 
// export default TopBar;

import "./topbar.css";
import { MdNotificationsNone, MdOutlineSettings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const TopBar = () => {
  const [modalType, setModalType] = useState(null); // "login" or "signup"

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Portfolio Tracker</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdNotificationsNone size="30px" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineSettings size="30px" />
          </div>
          <div className="topbarIconContainer" onClick={() => setModalType("login")}>
            <CgProfile size="30px" />
          </div>
        </div>
      </div>

      {modalType === "login" && <Login onSwitch={() => setModalType("signup")} onClose={() => setModalType(null)} />}
      {modalType === "signup" && <Signup onSwitch={() => setModalType("login")} onClose={() => setModalType(null)} />}
    </div>
  );
};

export default TopBar;
