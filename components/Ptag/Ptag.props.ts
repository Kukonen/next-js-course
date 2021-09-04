import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface IPtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'small' | 'middle' | 'big';
    children: ReactNode;
}