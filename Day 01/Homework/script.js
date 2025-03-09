// 1.

const promise1 = new Promise((resolve) => {
    resolve("Hello, Promise!");
})

// 2. 

const promise2 = new Promise((_, reject) => {
    reject("Something went wrong!");
});

promise2
    .catch((err) => console.log(err));

// 3.

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello world!");
    }, 2000)
})

promise3
    .then(res => console.log(res))

// 4.

const promise4 = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 2);

    if (random){
        resolve("Ola amigos");
    } else {
        reject("La pasion");
    }
})

promise4
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// 5.

const promise5 = new Promise((resolve) => {
    resolve(5);
})

promise5
    .then((res) => {console.log(res); return res * 2})
    .then((res) => {console.log(res); return res * 2})
    .then((res) => {console.log(res); return res * 2});

// 6.

const promise6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000)
})

promise6
    .then((res) => console.log(res));