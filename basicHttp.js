class basicHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // Make an HTTP GET Request
  get(url, callback) {
    this.http.open("GET", url, true);
    // if not using arrow fn:
    // let self = this;
    this.http.onload = () => {
      // if (self.http.status === 200) {
      //   console.log(self.http.responseText);
      // }
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback("Error: " + this.http.status);
      }
    };
    this.http.send();
  }
  // Make an HTTP POST Request
  // Make an HTTP PUT Request
  // Make an HTTP DELETE Request
}
