class TestAdapter {
  constructor() {
    this.headers = ['Col1', 'Col2', 'Col3', 'Col4'];
    this.data = [
      ['hello1', 'there', 'i', 'am', 'data1'],
      ['hello2', 'there', 'i', 'am', 'data2'],
      ['hello3', 'there', 'i', 'am', 'data3'],
      ['hello4', 'there', 'i', 'am', 'data4']
    ];
  }

  ConstructUserData(userName, email) {
    return {
      userName, 
      email,
      headers: this.headers,
      data: this.data
    };
  }

  GetUserData(userName, email) {
    const returnVal = userName !== 'Daniel' && email !== 'daniel.rosendal@gmail.com' ?
      this.ConstructUserData(userName, email) : null;
    return returnVal;
  }
}

module.exports = TestAdapter;
