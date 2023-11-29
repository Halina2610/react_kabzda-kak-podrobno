import React from 'react';

import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
};
const onChangeHandler = action('onChange')

export const UncontrolledRatingDefault1 = () => <UncontrolledRating defaultValue={1} callback={onChangeHandler}/>
export const UncontrolledRatingDefault2 = () => <UncontrolledRating defaultValue={2} callback={onChangeHandler}/>
export const UncontrolledRatingDefault3 = () => <UncontrolledRating defaultValue={3} callback={onChangeHandler}/>
export const UncontrolledRatingDefault4 = () => <UncontrolledRating defaultValue={4} callback={onChangeHandler}/>
export const UncontrolledRatingDefault5 = () => <UncontrolledRating defaultValue={5} callback={onChangeHandler}/>



