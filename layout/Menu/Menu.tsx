import  styles from './Menu.module.css';
import cn from 'classnames';
import {format} from 'date-fns';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/Courses.svg';
import ServicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Books.svg';
import ProductsIcon from './icons/Products.svg'
import { TopLevelCategory } from '../../interfaces/page.inferface';

const firstLevelMenu : FirstLevelMenuItem[] = [
    {route : 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route : 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route : 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route : 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const Menu  = () : JSX.Elemet => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () : JSX.Element => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive] : m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (MenuItem: FirstLevelMenuItem ) :JSX.Element => {
        return (
            <div className={styles.seconBlock}>
                {menu.map(m => (
                    <div key = {m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock,  {
                            [styles.secondLevelBlockOpened] :  m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, MenuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) :JSX.Element => {
        return (
            <>
                {
                    pages.map(p => (
                        <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                            [styles.thirdLevelActive] : false
                        })}>
                            {p.category}
                        </a>
                    ))
                }
            </>
        );
    };


    return (
        <div className={styles.menu}>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    )
}