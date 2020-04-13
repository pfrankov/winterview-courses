const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "один");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "два");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));