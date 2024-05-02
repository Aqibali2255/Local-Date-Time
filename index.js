let clock = document.querySelector('.clock')
let data = document.querySelector('.data')


setInterval(() => {  // we use the setinterval for change the time on every second
    let date = new Date()
    // console.log(date.toLocaleTimeString());

    // clock.innerHTML = date.toLocaleString()  // for showing date and time both

    data.innerHTML = date.toLocaleDateString()  // for showing date 

    clock.innerHTML = date.toLocaleTimeString()  // for showing date and time both

}, 1000)
