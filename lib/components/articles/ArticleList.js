import React, {useEffect} from 'react';
import Article from "./Article";

const ArticleList = ({articles}) => {
    return articles ? (
        <div>
            {Object.keys(articles).map(articleId => <Article key={articleId} article={articles[articleId]} />)}
        </div>
    ) : (
        <div>No articles available</div>
    );
}

export default ArticleList;
