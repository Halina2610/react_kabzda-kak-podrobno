import React, { useState } from "react";

type RatingPropsType = {};

export const UncontrolledRating = (props: RatingPropsType) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value: number) => () => setRating(rating === value ? 0 : value);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => (
                <Star key={value} selected={rating >= value} onClick={handleRatingChange(value)} />
            ))}
        </div>
    );
};

type StarPropsType = {
    selected: boolean;
    onClick: () => void;
};

function Star(props: StarPropsType) {
    console.log("Star rendering");

    return (
        <span onClick={props.onClick}>
      {props.selected ? "★" : "☆"}
    </span>
    );
}