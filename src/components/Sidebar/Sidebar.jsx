import css from './Sidebar.module.css';
import { MdSpaceDashboard, MdCalendarToday, MdList, MdSupervisedUserCircle } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();  // Get the current location path

    return (
        <div className={css.container}>
            <img src="./logo.png" alt="logo" className={css.logo} />

            <div className={css.menu}>
                <NavLink
                    to="dashboard"
                    className={`${css.item} ${location.pathname === '/dashboard' ? css.active : ''}`}
                    title={"Dashboard"}
                >
                    <MdSpaceDashboard size={30} /> Dashboard
                </NavLink>

                <NavLink
                    to="calendar"
                    className={`${css.item} ${location.pathname === '/calendar' ? css.active : ''}`}
                    title="Calendar"
                >
                    <MdCalendarToday size={30} /> Daily Work
                </NavLink>

                <NavLink
                    to="board"
                    className={`${css.item} ${location.pathname === '/board' ? css.active : ''}`}
                    title="Trello Board"
                >
                    <MdList size={30} /> Todo List
                </NavLink>

                <NavLink
                    to="users"
                    className={`${css.item} ${location.pathname === '/users' ? css.active : ''}`}
                    title="Users"
                >
                    <MdSupervisedUserCircle size={30} /> User
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
