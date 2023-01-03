import * as React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import * as styles from "./styles/home.module.css";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Bringing Technology To The Masses.</p>
          <Link className={styles.btn} to='/projects'>Portfolio</Link>
        </div>
        <img src="static/banner.png" alt="banner.png" style={{maxWidth: '100%'}} />
      </section>
    </Layout>
  );
}
