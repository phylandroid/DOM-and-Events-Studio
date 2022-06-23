// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeoff = this.document.getElementById('takeoff');
    const status = this.document.getElementById('flightStatus');

    takeoff.addEventListener("click", function (event) {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            status.innerHTML('Shuttle in flight');
        }
    })
})
