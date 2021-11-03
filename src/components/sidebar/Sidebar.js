import './Sidebar.css';

import logo from '../../assets/logo.png';

const Sidebar = ({ sidebarOpen, closeSidebar}) => {
    return (
        <div className = {sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className ="sidebar__title">
                <div className ="sidebar__img">
                    <img src={logo} alt="logo" />
                </div>

                <i 
                    onClick={() => closeSidebar()}
                    className="fas fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                    ></i>
                </div>
                <div className="sidebar__menu">
                    <div className ="sidebar__link active_menu_link">
                        <i className="fas fa-home"></i>
                        <a href="#">Home</a>   
                    </div>
                    <div className="sidebar__link">
                        <details className="collapse">
                            <summary><i className="fas fa-columns"></i><strong>Dashboard</strong></summary>
                            <ul>
                                <li><a className="text-light" href="#">Item 1</a></li>  
                                <li><a className="text-light" href="#">Item 1</a></li>  
                                <li><a className="text-light" href="#">Item 1</a></li>  
                            </ul>
                        </details>
                    </div>
                    <div className="sidebar__link">
                        <i className="fas fa-wallet"></i>
                        <a href="#">Finanças</a>
                    </div>
                    <div className="sidebar__link">
                        <i className="fa fa-cog"></i>
                        <a href="#">Configurações</a>
                    </div>
                </div>
                
            </div>
    )
}

export default Sidebar;