import { useEffect, useState } from "react";
import { NotificationsNone, Search } from "@mui/icons-material";
import styles from "./Header.module.css";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formatted = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formatted);
  }, []);

  return (
    <header className={styles.headContainer}>
      <div className={styles.dateSection}>
        <CalendarMonthRoundedIcon fontSize="small" color="primary" />
        <span>{currentDate}</span>
      </div>

      <div className={styles.searchBar}>
        <Search fontSize="small" />
        <input type="text" placeholder="Search accounts, transfers, or clients" />
      </div>

      <div className={styles.rightSection}>
        <button className={styles.iconButton}>
          <NotificationsNone fontSize="small" />
        </button>

        <div className={styles.profileBox}>
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>Ariana Summers</p>
            <p className={styles.profileRole}>Senior Financial Analyst</p>
          </div>
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="User avatar"
            className={styles.profileAvatar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
