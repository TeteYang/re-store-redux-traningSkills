export default class booksStoreServices {
  data = [
    {
      id: 1,
      title: 'Production ready microsevices',
      autor: 'Susan J. Fowler'
    },
    {
      id: 2,
      title: 'Please It!',
      autor: 'Michael Nygard'
    }
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(Math.random() > 0.75) {
          reject(new Error('Something bad happened'))
        }
        resolve(this.data);
      })
    }, 700);
  }
}