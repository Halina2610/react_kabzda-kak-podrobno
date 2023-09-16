import { action } from '@storybook/addon-actions';
import React, {useState} from 'react';

import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Components/Rating',
    component: Rating,
};

export const Default = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

   return (
       <Rating value={ratingValue} onClick={setRatingValue}/>
    )
}