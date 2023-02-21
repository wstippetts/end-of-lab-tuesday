export class Gift {
  constructor(data) {
    this._id = data._id || null
    this.tag = data.tag || null
    this.url = data.url || "https://www.kornferry.com/content/dam/kornferry/insights-images/articles/BurnisonDec13.20Home.jpg"
    this.opened = data.opened || false
    this.createdat = data.createdAt || null

  }
}
