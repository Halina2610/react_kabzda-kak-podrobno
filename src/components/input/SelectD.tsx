import React, {useState, KeyboardEvent, useEffect} from 'react';
import classes from './SelectedD.module.css';

export type ItemType = {
    title: string;
    value: any;
};

type SelectPropsType = {
    value?: any;
    onChange: (value: any) => void;
    items: ItemType[];
};

export const SelectD = (props: SelectPropsType) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectItem = props.items.find((i) => i.value === props.value);
    const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value]);

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement =
                        e.key === 'ArrowDown' ?
                            props.items[i + 1] :
                            props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    };

    return (
        <div className={classes.select} tabIndex={0} onKeyUp={onKeyUp}>
      <span className={classes.main} onClick={toggleItems}>
        {selectItem && selectItem.title}
      </span>
            {active && (
                <div className={classes.items}>
                    {props.items.map((i) => (
                        <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value);
                            }}
                            className={`${classes.item} ${
                                hoveredItem === i ? classes.selected : ''
                            }`}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value);
                            }}
                        >
                            {i.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};