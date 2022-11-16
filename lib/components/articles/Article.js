import React from 'react';

const Article = ({article}) => {

    return article && (
        <p>
            <div><b>{article.title}</b></div>
            <div>{article.body}</div>
        </p>
    );
}

export default Article;
