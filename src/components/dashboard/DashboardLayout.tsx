import {  Outlet } from 'react-router';
import styles from "./DashboardLayout.module.css";
import Sidebar from './SideBar';

const DashboardLayout = () => {
    return (
        <div className={styles.dblMainContainer}>
            <div className={styles.dblSidebarContainer}>
                <Sidebar/>
            </div>
            <div className={styles.dbContentContainer}>
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
