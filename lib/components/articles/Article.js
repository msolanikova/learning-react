import React from 'react';

const Article = ({article, actions}) => {

    const author = actions.lookupAuthor(article.authorId);

    return article && (
        <div className="article">
            <div><b>{article.title}</b></div>
            <div className="author">by <a href={author.website}>{author?.firstName} {author?.lastName}</a></div>
            <div className="body">{article.body}</div>
        </div>
    );
}

export default Article;
