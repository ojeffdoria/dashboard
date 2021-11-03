import './Navbar.css';


const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fas fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__end">
                <a href="#">
                    <i className="fas fa-bell bg-transparent"></i>
                </a>
                <a href="#">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;