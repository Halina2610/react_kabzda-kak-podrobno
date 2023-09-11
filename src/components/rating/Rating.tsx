import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType;
    onClick: (value: RatingValueType) => void
};

export const Rating = (props: RatingPropsType) => {
    const stars: RatingValueType[] = [1, 2, 3, 4, 5];

    return (
        <div>
            {stars.map((value) => (
                <Star
                    key={value}
                    selected={props.value >= value}
                    onClick={props.onClick}
                    value={value}
                />
            ))}
        </div>
    );
};

type StarPropsType = {
    selected: boolean;
    value: RatingValueType
    onClick: (value: RatingValueType) => void

};

function Star(props: StarPropsType) {
    console.log("Star rendering");

    const handleClick = () => props.onClick(props.value);

    return (
        <span onClick={handleClick}>{props.selected ? "★" : "☆"}</span>
    );
}