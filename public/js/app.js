console.log('Client side JS')


const searchInput = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const location = searchInput.value

    msgOne.textContent = 'Loading forecast data...'
    msgTwo.textContent = ''
    
    fetch('http://localhost:3000/forecast?address=' + location)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then((data) => {
        if (data.error) {
            throw Error(data.error)
        }
        else {
        msgOne.textContent = data.forecast
        msgTwo.textContent = data.location
        }
    })
    .catch((error) => {
        msgOne.textContent = error
    })

})
