import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./PublicLayout.module.scss";

function PublicLayout({ children }) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.wrapper}>
        <Header />

        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default PublicLayout;
