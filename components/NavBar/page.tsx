"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import React, { useState, useLayoutEffect } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import HowItWorks from "../howItWorks/page";

const NavBar = () => {
  const [isRightSideVisible, setRightSideVisible] = useState(false);

  const toggleRightSide = () => {
    setRightSideVisible(!isRightSideVisible);
  };

  useLayoutEffect(() => {
    const checkScreenWidth = () => {
      setRightSideVisible(window.innerWidth >= 768);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div>
      <div className={styles.NavBar}>
        <img src="/TOPBAR.png" alt="" />
        <div className={styles.navBG}>
          <div className={styles.leftSide}>
            <Link href="/">
              <img src="/Logo.png" alt="" />
            </Link>
            <h1>UPBOX </h1>
          </div>
          <div
            className={styles.rightSide}
            style={{ display: isRightSideVisible ? "block" : "none" }}
          >
            <ul>
              <li className={styles.thismonth}>
                <Link
                  href="#pickYourPlan"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <span>THIS MONTH</span>
                </Link>
              </li>
              <Dropdown>
                <DropdownTrigger>
                  <li>SKIN▼</li>
                </DropdownTrigger>
                <DropdownMenu className={styles.DropdownMenu}>
                  <DropdownItem className={styles.item}>
                    Foundation
                  </DropdownItem>
                  <DropdownItem className={styles.item}>Blush</DropdownItem>
                  <DropdownItem className={styles.item}>Bronzer</DropdownItem>
                  <DropdownItem className={styles.item}>Primer</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Link href="#howItWorks" style={{ textDecoration: "none" }}>
                <li>HOW</li>
              </Link>

              <Link href="#social" style={{ textDecoration: "none" }}>
                <li>POSTS</li>
              </Link>
              <li>SALE</li>
              <Link href="/login">
                <button>
                  <span>LOG IN ►</span>
                </button>
              </Link>
            </ul>
          </div>
          <i
            className={"fa-regular fa-chart-bar "}
            onClick={toggleRightSide}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
