import { ISideBarProps } from "./SideBar.props";
import styles from './SideBar.module.css';

export const SideBar = ({...props}:ISideBarProps) : JSX.Element => {
    return (
        <div {...props}>
            SiteBar
        </div>
    )
}