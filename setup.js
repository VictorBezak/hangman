const initOptions = document.getElementById('init-options')
const onlineOptions = document.getElementById('online-options')
const offlineOptions = document.getElementById('offline-options')


// Init Options

// initOptions.querySelector('#online-game-btn')
//     .addEventListener('click', () => {
//         console.log("Online Game Clicked")
//         initOptions.style.display = "none"
//         onlineOptions.style.display = "grid"
//     })

// initOptions.querySelector('#offline-game-btn')
//     .addEventListener('click', () => {
//         console.log("Offline Game Clicked")
//         initOptions.style.display = "none"
//         offlineOptions.style.display = "grid"
//     })


// Online Options

// onlineOptions.querySelector('.back-btn')
//     .addEventListener('click', () => {
//         onlineOptions.style.display = "none"
//         initOptions.style.display = "block"
//     })


// Offline Options

offlineOptions.querySelector('.back-btn')
    .addEventListener('click', () => {
        offlineOptions.style.display = "none"
        initOptions.style.display = "block"
    })