import {RatingValueType, Star} from './Rating';
import {useState} from 'react';

type RatingPropsType = {
    defaultValue?: RatingValueType
    callback?: ()=> void
};

export const UncontrolledRating = (props: RatingPropsType) => {
    const [rating, setRating] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    const handleRatingChange = (value: RatingValueType) => () => setRating(rating === value ? 0 : value);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star key={value} selected={rating >= value} onClick={handleRatingChange(value as RatingValueType)} value={0}/>
            ))}
        </div>
    );
};