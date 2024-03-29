import React, {useEffect, useState} from 'react';
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    })

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: debouncedTerm
                }
            })
            if (term) {
            setResults(data.query.search);
        }}
        search();
    }, [debouncedTerm])


    const renderedResults = results.map(result => {
        return (
        <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a  href={`https://en.wikipedia.org?curid=${results.pageid}`} 
                    className="ui button"
                    >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
        )
    })

    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label htmlFor="">Enter search term:</label>
                <input 
                    type="text"
                    onChange={e => setTerm(e.target.value)} 
                    className="input"
                    value={term} />
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
    </div>
    )
}

export default Search;