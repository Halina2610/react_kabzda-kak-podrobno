import React from "react";
import {AnalogClock} from "./AnalogClock";

export default {
    title: 'useEffect analog clock demo',
    component: AnalogClock

}

export const AnalogClockUseEffect = () => {
    return (
        <AnalogClock datediff={0}/>
    )
}