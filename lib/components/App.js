import React, {useEffect, useState} from 'react';
import DataApi from '../DataApi';
import {data} from '../test-data.json';
import ArticleList from "./articles/ArticleList";

const api = new DataApi(data);

const App = () => {
    const [state, setState] = useState(
        {
            articles: api.getArticles(),
            authors: api.getAuthors()
        }
    );
    useEffect(() => {
        console.log(state.articles)
    });

    return (
        <>
            <h2>Hello from react!</h2>
            <ArticleList articles={state.articles} />
        </>
    ); 
};

export default App;
