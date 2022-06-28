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
  post(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }
  // Make an HTTP PUT Request
  put(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  // Make an HTTP DELETE Request
}
