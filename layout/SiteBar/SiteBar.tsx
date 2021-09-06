import { ISiteBarProps } from "./SiteBar.props";
import styles from './SiteBar.module.css';

export const SiteBar = ({...props}:ISiteBarProps) : JSX.Element => {
    return (
        <div {...props}>
            SiteBar
        </div>
    )
}