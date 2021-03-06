import CoursesIcon from './icons/Courses.svg';
import ServicesIcon from './icons/Services.svg';
import BooksIcon from './icons/Books.svg';
import ProductsIcon from './icons/Products.svg';
import { TopLevelCategory } from '../interfaces/page.inferface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu : FirstLevelMenuItem[] = [
    {route : 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    {route : 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    {route : 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    {route : 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];