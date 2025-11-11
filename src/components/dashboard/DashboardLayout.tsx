import { Link, Outlet } from 'react-router';
import styles from "./DashboardLayout.module.css";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const sidebarItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Loan', path: '/loan', icon: <CreditCardIcon /> },
    { label: 'Transactions', path: '/transactions', icon: <HistoryIcon /> },
];

const DashboardLayout = () => {


    return (
        <div className={styles.dblMainContainer}>
            <div className={styles.dblSidebarContainer}>
                <div className={styles.dblSidebarTitle}>
                    <AccountBalanceIcon fontSize="large" className={styles.dblSidebarTitleIcon} />
                     <Typography variant="h5" className={styles.dblSidebarTitleText}>
                        Neo Bank
                    </Typography>
                </div>
                <List>
                    {sidebarItems.map((item) => (
                        <ListItem component={Link} to={item.path} key={item.label}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className={styles.dbContentContainer}>
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
