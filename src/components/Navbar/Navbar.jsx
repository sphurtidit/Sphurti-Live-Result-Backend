import './Navbar.css';
import { useRef } from 'react';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('show-nav');
    }

    return (
        <nav>
            <div className="main-nav" ref={navRef}>
                <div className="center-button">
                    <Link to="home" offset={-80}><li onClick={showNav}>VolleyBall</li></Link>
                    <Link to="msg" offset={-80}><li onClick={showNav}>Table Tennis</li></Link>
                    <Link to="nav-sports" offset={-80}><li onClick={showNav}>Badminton</li></Link>
                    <Link to="acc-section" offset={-80}><li onClick={showNav}>BasketBall</li></Link>
                    <Link to="team-nav" offset={-80}><li onClick={showNav}>Cricket</li></Link> 
                    <Link to="team-nav" offset={-80}><li onClick={showNav}>Football</li></Link> 
                </div>
                <button className='nav-button nav-close-button' onClick={showNav}>
                    <MdClose />
                </button>
            </div>
            <button className='nav-button' onClick={showNav}>
                <GiHamburgerMenu />
            </button>
        </nav>
    );
}

export default Navbar;