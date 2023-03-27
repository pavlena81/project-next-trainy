import React from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import styles from '../../../styles/Home.module.css';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer/>
        </>
    )
}
export default MainLayout;