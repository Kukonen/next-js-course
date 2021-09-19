import { ISideBarProps } from "./SideBar.props";
import styles from './SideBar.module.css';
import {Menu} from '../Menu/Menu';
import LogoImg from '../logo.svg';
import classNames from "classnames";

export const SideBar = ({className, ...props}:ISideBarProps) : JSX.Element => {
    return (
        <div {...props} className={classNames(className, styles.sidebar)}>
            <LogoImg className={styles.logo}/>
            <div>Search</div>
            <Menu />
        </div>
    )
}