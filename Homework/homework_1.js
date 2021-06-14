const url = 'https://jsonplaceholder.typicode.com/todos/1'
const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}

function isThenable(val) {
  return val instanceof MyPromise;
}
class MyPromise {
  constructor(callback) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];
    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err)
    }
  }
  
   _resolve = (value) => {
    this.updateResult(value, STATE.FULFILLED);
  }
  
  _reject = (error) => {
    this.updateResult(error, STATE.REJECTED);
  }
  
  updateResult(value, state) {
    setTimeout(() => {
      
      if (this.state !== STATE.PENDING) {
        return;
      }
      if (isThenable(value)) {
        return value.then(this._resolve, this._reject);
      }
      this.value = value;
      this.state = state;
      this.executeHandlers();
    }, 0);
  }
  
  addHandlers(handlers) {
    this.handlers.push(handlers);
    this.executeHandlers();
  }
  
  executeHandlers() {
    if (this.state === STATE.PENDING) {
      return null;
    }
    this.handlers.forEach((handler) => {
      if (this.state === STATE.FULFILLED) {
        return handler.onSuccess(this.value);
      } 
      return handler.onFail(this.value);
    });
    this.handlers = [];
  }
  
    then(onSuccess, onFail) {
      return new MyPromise((res, rej) => {
          this.addHandlers({
            onSuccess: function(value) {
              if (!onSuccess) {
                return res(value);
              }
              try {
                return res(onSuccess(value))
              } catch(err) {
                return rej(err);
              }
            },
            onFail: function(value) {
              if (!onFail) {
                return rej(value);
              }
              try {
                return res(onFail(value))
              } catch(err) {
                return rej(err);
              }
            }
          });
      });
    }
    
    catch(onFail) {
      return this.then(null, onFail);
    }
    
    finally(callback) {
      return new MyPromise((res, rej) => {
         let val;
         let wasRejected;
         this.then((value) => {
           wasRejected = false;
           val = value;
           return callback();
         }, (err) => {
           wasRejected = true;
           val = err;
           return callback();
         }).then(() => {
           if(!wasRejected) {
             return res(val);
           } 
           return rej(val);
         })
      })
    }
}
MyPromise.resolve = (value) => new MyPromise(resolve => resolve(value))
MyPromise.reject = (value) => new MyPromise(reject => reject(value))


MyPromise.all = function promiseAllIterative(values) {
    return new MyPromise((resolve, reject) => {
       let results = [];
       let completed = 0;
       
       values.forEach((value, index) => {
            MyPromise.resolve(value).then(result => {
                results[index] = result;
                completed += 1;
                
                if (completed == values.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
       });
    });
}

function ajax (url, config) {
    return new MyPromise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(config.type || "GET",url);
        if (config.headers) {
            Object.keys(config.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(config.body);
    });
};

// test for possible cases

const p1 = ajax(url, {
  type: "GET" ,
  headers: {} ,
  data: {}
}).then((data) => {console.log(data);}).catch((err) => {console.log (err)})

const p2 = ajax(url, {
  type: "GET" ,
  headers: {} ,
  data: {}
}).then((data) => {console.log(data)}).then(()=>{console.log("second then")}).catch((err) => {console.log (err)})

const p3 = ajax(url, {
  type: "GET" ,
  headers: {} ,
  data: {}
}).catch((err) => {console.log (err)}).then((data) => {console.log(data)}).then(()=>{console.log("second then")})

MyPromise.all([p1, p2, p3])
.catch((err) => {console.log(err)})
.then((resultArr) => {console.log(resultArr)})
.then((resultArr) => {console.log(resultArr,"second result Arr")})



// var p1 = MyPromise.resolve(3);
// var p2 = 1337;
// var p3 = new MyPromise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([p1, p2, p3]).then(values => {
//   console.log(values);
// });

