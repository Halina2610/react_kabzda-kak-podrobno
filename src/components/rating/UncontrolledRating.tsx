import React, { useState } from "react";

type RatingPropsType = {
    // value: number;
};

export const UncontrolledRating = (props: RatingPropsType) => {
    let [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => {
        if (rating === value) {
            // Если выбранная звезда уже активна, установить рейтинг в 0
            setRating(0);
        } else {
            setRating(value);
        }
    };

    return (
        <div>
            <Star selected={rating > 0} onClick={() => handleRatingChange(1)} />
            <Star selected={rating > 1} onClick={() => handleRatingChange(2)} />
            <Star selected={rating > 2} onClick={() => handleRatingChange(3)} />
            <Star selected={rating > 3} onClick={() => handleRatingChange(4)} />
            <Star selected={rating > 4} onClick={() => handleRatingChange(5)} />
        </div>
    );
};

type StarPropsType = {
    selected: boolean;
    onClick: () => void;
};

function Star(props: StarPropsType) {
    console.log("Star rendering");

    const handleClick = () => {
        if (props.selected) {
            // Если звезда активна, уменьшить рейтинг на 1
            props.onClick();
        }
    };

    if (props.selected) {
        return <span onClick={handleClick}>★</span>;
    } else {
        return <span onClick={props.onClick}>☆</span>;
    }
}