export default class SearchResponseData {
  constructor(obj) {
    obj && Object.assign(this, obj);
  }

  getHeaders() {
    let stringHeader = '';
    for (let i = 0; i < this.headers.length; i += 1) {
      const header = this.headers[i];
      stringHeader += header;
    }
    return stringHeader;
  }

  getText() {
    return `The text ${this.email} ${this.userName}`;
  }
}

