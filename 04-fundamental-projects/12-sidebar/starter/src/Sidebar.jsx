import logo from "./logo.svg";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, icon, text } = link;

                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="social-links">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};
export default Sidebar;
