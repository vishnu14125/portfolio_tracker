import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav>
            {/* <Link to="/">Dashboard</Link> If added, must amend route for Discover*/}
            <Link to="/">Discover</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/activity">Activity</Link> */}
            {/* <Link to="/account">Account Settings</Link> */}
        </nav>
    )
}

export default NavBar;