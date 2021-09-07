import { IFooterProps } from "./Footer.props";
import styles from './Footer.module.css';

export const Footer = ({...props}:IFooterProps) : JSX.Element => {
    return (
        <div {...props} className={styles.footer}>
            <span className={styles.copyright}>
                OwlTop © 2020 - 2021 Все права защищены
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