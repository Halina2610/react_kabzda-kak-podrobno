import React from 'react';


type TopCarsPropsType = {
    cars: TopType[]
}
type TopType = {
    manufacturer: string
    model: string
}

export const MethodMap = (props: TopCarsPropsType) => {
    return (
        <table>
            {props.cars.map((ObjectTopCarsArray, index) => {
                return (
                    <tr key={index}>
                        <th>{ObjectTopCarsArray.manufacturer}</th>
                        <th>{ObjectTopCarsArray.model}</th>
                    </tr>
                )
            })}
<<<<<<< HEAD
=======


>>>>>>> f64c11b (test)
        </table>
    );
};

