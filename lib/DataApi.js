class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  _mapToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles() {
    return this._mapToObject(this.rawData.articles);
  }

  getAuthors() {
    return this._mapToObject(this.rawData.authors);
  }
}

export default DataApi;
