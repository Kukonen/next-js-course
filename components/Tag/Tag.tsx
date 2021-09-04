import {ITagProps} from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'middle', children, color = 'ghost', href, className, ...props} : ITagProps) : JSX.Element  => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.grey]: color == 'grey',
            [styles.primary]: color == 'primary',
            [styles.red]: color == 'red',
            [styles.small]: size == 'small',
            [styles.middle]: size == 'middle',
        })} {...props}> {
            href ? 
               <a href={href}>{children}</a> :
               {children}
        }
        </div>
    );
}