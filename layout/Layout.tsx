import React, {FunctionComponent} from "react";
import { ILayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import {Header} from './Header/Header';
import {SideBar} from "./SideBar/SideBar";
import {Footer} from './Footer/Footer';

const Layout = ({children}:ILayoutProps) : JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <SideBar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>)=> {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};