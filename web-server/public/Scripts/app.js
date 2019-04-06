console.log('Client side JavaScript file is Loded');

// fetch('http://localhost:3000/weather?address=Berlin').then((res) => {
//     res.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location);
//             console.log(data.foreCastData)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.getElementById('message-1');
const resultMessage = document.getElementById('message-2');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    fetch('/weather?address=' + encodeURIComponent(location)).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                errorMessage.textContent = data.error;
            } else {
                resultMessage.textContent = data.location + '\n' + data.foreCastData;

            }
        })
    })

})