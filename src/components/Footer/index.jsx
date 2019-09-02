import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-8 col-md-5">
            <h5 className={styles.title}>A.A. Info Corp.</h5>
            <p className={styles.description}>
              Let's build your business together.
            </p>
          </div>
          <div className="col-2">
            <ul className="list-unstyled">
              <li>
                <a className={styles.footerlink} href="/Home">
                  Home
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href="/About_Us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
