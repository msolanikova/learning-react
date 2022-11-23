class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this._mapToObject(rawData.articles),
      authors: this._mapToObject(rawData.authors)
    };
  }

  _mapToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }
}

export default StateApi;
