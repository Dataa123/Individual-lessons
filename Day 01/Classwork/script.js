const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello world!");
    }, 2000)
})

console.log(promise);