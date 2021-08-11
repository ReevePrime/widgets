import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library program among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating various components"
    }
]

const options = [
    {
        label: "The color red",
        value: "red"},
    {
        label: "the color green",
        value: "green"},
    {
        label: "the color blue",
        value: "blue"
    }
]


export default () => {
        const [selected, setSelected] = useState(options[0]);
        const [showDropdown, setShowDropdown] = useState(true);
        
        return (
            <div>
                <Translate />
                {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                {showDropdown ?
                <Accordion items={items}/>
                <Search />
                <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected} />
                    : null
            } */}
            </div>
        );
    }
