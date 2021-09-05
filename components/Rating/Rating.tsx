import {IRatingProps} from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import {useEffect, useState} from 'react';
import StarImg from './Star.svg';
import {KeyboardEvent} from 'react';

export const Rating = ({isEditable = false, rating, setRating, ...props} : IRatingProps) : JSX.Element  => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));  

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating : number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span className={cn(styles.star, {
                        [styles.fill]: index < currentRating,
                        [styles.editable] :isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(index + 1)}
                >
                    <StarImg
                             tabIndex={isEditable ? 0 : -1}
                             onKeyDown={(e : KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, e)}
                    />
                </span>

            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i :number) => {
        if (!isEditable)
            return;
        constructRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space'  || !setRating)
            return;
        setRating(i)
    }

    const changeRating = (i: number) => {
        if (!isEditable || !setRating)
            return;
        setRating(i);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
}