import React from "react";
import styles from "./top.module.css";
import Link from "next/link";
const TopSection = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftTextSection}>
            <h1>Look good without leaving your house.</h1>
            <p>
              Upbox is the easiest way to look your best without having to hunt
              for the perfect makeup combination. Our stylists curate the latest
              trends and send them directly to your door every month.
            </p>
            <div className={styles.buttons}>
              <Link href="/sign">
                <button>
                  <span>SIGN UP ►</span>
                </button>
              </Link>
              <Link href="/contactUS">
                <button>
                  <span>CONTACT US</span>
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="/box.png" alt="" />
            <img className={styles.box2} src="/box2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
