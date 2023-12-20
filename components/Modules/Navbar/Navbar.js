import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="index.html" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </a>
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
          
            <Link href="/" className={`${styles.nav_link} ${styles.active_nav_link}`}>
            Home
            </Link>
            <Link href="/about" className={`${styles.nav_link}`}>
              About
            </Link>

            <Link href="/services" className={`${styles.nav_link}`}>
            Service
            </Link>
            <Link href="/menu" className={`${styles.nav_link}`}>
            Menu
            </Link>
            
            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link
                  href="/reservaition"
                  className={`${styles.dropdown_item}`}
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.dropdown_item}`}
                >
                  Testimonial
                </Link>
              </div>
            </div>
            <a href="contact.html" className={`${styles.nav_link}`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
