import { IFooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import {format} from 'date-fns';
import cn from 'classnames';

export const Footer = ({...props}:IFooterProps) : JSX.Element => {
    return (
        <div {...props} className={styles.footer}>
            <span className={styles.copyright}>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </span>
            <a href="#" className={styles.link}>
                Пользовательское соглашение
            </a>
            <a href="#" className={styles.link}>
                Политика конфиденциальности
            </a>
        </div>
    )
}