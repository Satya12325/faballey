import React from "react";
import styles from "./Cartfooter.module.css"
function Cartfooter() {
  return (
    <div className={styles.maindiv}>

        <div className={styles.shipfootmain}>
          <div classNme={styles.shipFooteritem}>
            <div className={styles.shipFooterbox}>
              <ul>
                <li>
                  <a href="https://www.faballey.com/">Home</a>
                </li>
                <li>
                  <a href="https://www.faballey.com/contactus">Contact us</a>
                </li>
                <li>
                  <a href="https://www.faballey.com/privacy">Privacy</a>
                </li>
                <li>
                  <a href="https://www.faballey.com/terms">Terms</a>
                </li>
              </ul>
              <p>© 2021 Faballey.com. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cartfooter;