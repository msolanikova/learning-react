import React, {useEffect} from 'react';
import Article from "./Article";

const ArticleList = ({articles, articleActions}) => {
    return articles ? (
        <div>
            {Object.values(articles).map(article =>
                <Article key={article.id} article={article} actions={articleActions} />
            )}
        </div>
    ) : (
        <div>No articles available</div>
    );
}

export default ArticleList;
