import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [controlledOnOff, setControlledOnOff] = useState<boolean>(true)
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const AccordionOnClickHandler = () => {
        setAccordionCollapsed(!accordionCollapsed);
    }

    const controlledCallback = () => {
        setControlledOnOff(!controlledOnOff);
    }
    const items = [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 1},
        {title: 'Artem', value: 1},
        {title: 'Victor', value: 1},
    ]


    const options: Option[] = [
        { countryId: 0, label: 'none', value: 'nothing', people: 0},
        { countryId: 1, label: "minsk", value: "Minsk", people: 1000000 },
        { countryId: 1, label: "vitebsk", value: "Vitebsk", people: 300000 },
        { countryId: 1, label: "polotsk", value: "Polotsk", people: 100000 },
        { countryId: 2, label: "varshava", value: "Varshava", people: 5000000 },
        { countryId: 2, label: "schecin", value: "Schecin", people: 800000 },
        { countryId: 2, label: "vratslow", value: "Vratslow", people: 500000 },
        { countryId: 3, label: "kiev", value: "Kiev", people: 100000000 },
        { countryId: 3, label: "odessa", value: "Odessa", people: 2000000 },
        { countryId: 3, label: "chernigow", value: "Chernigow", people: 1000000 }
    ]


    const handleSelectChange = (option: Option | null) => {
        setSelectedOption(option);
    };

    const itemses: ItemType[] = [
        { title: 'nothing', value: '1' },
        { title: 'Minsk', value: '2' },
        { title: 'Vitebsk', value: '3' },
    ]

    const [active, setActive] = useState(false)

    const showItems = () => setActive(!active)

    return (
        <AppWrapper>
            <Typewriter text="Hello, World!" />

            <PageTitle title={'React - Kabzda kak podrobno'}/>
            <UncontrolledRating/>
            <SelectD items={itemses} onChange={showItems} value={'1'}/>
            <CustomSelect options={options} selectName={'My city'} onChange={handleSelectChange} value={selectedOption}/>

            <OnOff value={controlledOnOff} callback={controlledCallback}/>

            <UncontrolledAccordion titleValue={'User1'}/>
            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onChange={AccordionOnClickHandler}
                items={items}
                onClick={()=> {}}
            />
            <UncontrolledOnOff onChange={controlledCallback}/> {controlledOnOff.toString()}
            <CustomCursor/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


        </AppWrapper>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

const AppWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  
`;

export default App;