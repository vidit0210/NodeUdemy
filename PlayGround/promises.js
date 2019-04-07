const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Rejected ')
        resolve('Solved')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result)
}).catch((error) => {
    console.log('Getting Error', error)
})