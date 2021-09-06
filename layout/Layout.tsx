import React, {FunctionComponent} from "react";
import { ILayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import {Header} from './Header/Header';
import {SiteBar} from "./SiteBar/SiteBar";
import {Footer} from './Footer/Footer';

const Layout = ({children}:ILayoutProps) : JSX.Element => {
    return (
        <>
            <Header  />
            <div>
                <SiteBar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
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