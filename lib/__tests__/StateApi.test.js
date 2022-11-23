import StateApi from '../StateApi';
import data from '../test-data.json';

const api = new StateApi(data);

describe('StateApi', () => {
  it('exposes articles', () => {
    const articles = api.getState().articles;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors', () => {
    const authors = api.getState().authors;
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
