import React, {useEffect, useState} from 'react';
import StateApi from '../StateApi';
import ArticleList from "./articles/ArticleList";
import axios from "axios";

const App = () => {
    const [state, setState] = useState(
        {
            articles: {},
            authors: {}
        }
    );
    const [store, setStore] = useState(new StateApi({authors:[], articles:[]}))

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:8080/data");
            const api = new StateApi(result?.data);
            setState((prevState) => (api.getState()));
            setStore((prevState) => (api))
        }
       fetchData();
    }, []);

    return (
        <>
            <h2>Hello from react!</h2>
            <ArticleList articles={state.articles} store={store} />
        </>
    );
};

export default App;
