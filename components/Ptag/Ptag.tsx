import {IPtagProps} from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({size = 'middle', children, className, ...props} : IPtagProps) : JSX.Element  => {
    switch(size) {
        case 'small': 
            return <p className={cn(styles.p, className, styles.small)} {...props}>{children}</p>;
        case 'middle': 
            return <p className={cn(styles.p, className, styles.middle)} {...props}>{children}</p>;
        case 'big': 
            return <p className={cn(styles.p, className, styles.big)} {...props}>{children}</p>;
        default: 
            return <></>;
    }
}