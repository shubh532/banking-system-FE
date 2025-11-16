import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "./DashboardLayout.module.css";
import Sidebar from "./SideBar";
import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main-scroll-area");
    if (!main) return;

    const handleScroll = () => {
      setIsScrolled(main.scrollTop > 5);
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.dblMainContainer}>
      <aside className={styles.dblSidebarContainer}>
        <Sidebar />
      </aside>

      <section className={styles.dbContentContainer}>
        <header className={`${styles.dbHeader} ${isScrolled ? styles.scrolled : ""}`}>
          <Header />
        </header>

        <main id="main-scroll-area" className={styles.dbMainContent}>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
