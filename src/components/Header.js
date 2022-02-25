/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "../css/header.module.css";
import NavCartImage from "./NavCartImage";
export default function Header({ productCount }) {
  const ShowMenu = () => {
    const menu = document.getElementById("mobileNav");
    menu.classList.add("ShowMenu");
    menu.classList.remove("HideMenu");
  };
  const hideMenu = () => {
    const menu = document.getElementById("mobileNav");
    menu.classList.remove("ShowMenu");
    menu.classList.add("HideMenu");
  };
  return (
    <header className={styles.mainHeader}>
      <div className="container">
        <div className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.hamburgerMenuBtn}>
              <img alt="" src="./images/icon-menu.svg" onClick={ShowMenu} />
            </div>
            <h1 className={styles.navH1}>sneakers</h1>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  Collections
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  Men
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  Women
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  About
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <NavCartImage productCount={productCount} />
        </div>
      </div>
      <div className={styles.mobileNav} id="mobileNav">
        <img
          className={styles.navCloseIcon}
          alt=""
          src="./images/icon-close.svg"
          onClick={hideMenu}
        />
        <ul className={styles.navMenuList}>
          <li className={styles.navMenuItems}>
            <a href="#1">Collections</a>
          </li>
          <li className={styles.navMenuItems}>
            <a href="#2">Men</a>
          </li>
          <li className={styles.navMenuItems}>
            <a href="#3">Women</a>
          </li>
          <li className={styles.navMenuItems}>
            <a href="#4">About</a>
          </li>
          <li className={styles.navMenuItems}>
            <a href="#5">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
