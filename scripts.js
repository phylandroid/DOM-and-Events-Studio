// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeoff = document.getElementById('takeoff');
    const status = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground')
    const sHeight = document.getElementById('spaceShuttleHeight')
    const down = document.getElementById('down');
    const imgObj = document.getElementById('rocket');


    takeoff.addEventListener("click", function () {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            status.innerHTML = 'Shuttle in flight';
            sBackground.style.backgroundColor = 'teal';
            sHeight.innerHTML = 10000;

        }
    })

    down.addEventListener("click", function () {
        let movement = parseInt(imgObj.style.position) + "-10px";
        imgObj.style.bottom = movement;
        sHeight.innerHTML = sHeight.innerHTML - 1000;
    })
})
