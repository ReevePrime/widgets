import React, { Component } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* <Accordion items={items}/> */}
                <Search />
            </div>
        );
    }
}
 
export default App;