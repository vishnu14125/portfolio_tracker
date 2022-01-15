import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            {/* <Link to="/">Dashboard</Link> If added, must amend route for Discover*/}
            <a href=""><Link to="/">Portfolio</Link></a>
            <a href=""><Link to="/stockmarket">Discover</Link></a>
            {/* <Link to="/activity">Activity</Link> */}
            {/* <Link to="/account">Account Settings</Link> */}
        </nav>
    )
}

export default NavBar;