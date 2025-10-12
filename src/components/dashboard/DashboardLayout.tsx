import { Link, Outlet } from 'react-router';
import styles from "./DashboardLayout.module.css";
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Bank Icon for branding
import { useState } from 'react';

const sidebarItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Loan', path: '/loan', icon: <CreditCardIcon /> },
    { label: 'Transactions', path: '/transactions', icon: <HistoryIcon /> },
];

const DashboardLayout = () => {
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className={styles.dblMainContainer}>
            <div className={`${styles.dblSidebarContainer} ${open ? styles.open : styles.closed}`}>
                <div className={styles.dblSidebarTitle}>
                    <AccountBalanceIcon fontSize="large" className={`${styles.dblSidebarTitleIcon}   ${open ? styles.openLogo : styles.closedLogo}`} />
                     <Typography variant="h5" className={styles.dblSidebarTitleText}>
                        Neo Bank
                    </Typography>
                </div>

                <IconButton
                    size="small"
                    className={styles.dblDrawerToggleButton}
                    onClick={handleDrawerToggle}
                >
                    {open ?
                        <ArrowBackIosRoundedIcon fontSize="inherit" /> :
                        <ArrowForwardIosRoundedIcon fontSize="inherit" />
                    }
                </IconButton>

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
