window.onbeforeunload = function(){
    console.log("here")
    localStorage.clear()
 }


console.log(localStorage)

localStorage.setItem("name","John")

/*
if (localStorage.length==0) {

    var links_total = 3
    var ads_total = 1
    var seconds_total = 1000
    var links_done = 0
    var ads_done = 0
    var seconds_done = 0

    localStorage.setItem("links_total",links_total)
    localStorage.setItem("ads_total",ads_total)
    localStorage.setItem("seconds_total",seconds_total)

    localStorage.setItem("links_done",links_done)
    localStorage.setItem("ads_done",ads_done)
    localStorage.setItem("seconds_done",seconds_done)
}
else {
    var links_total = parseFloat(localStorage.getItem("links_total"))
    var ads_total = parseFloat(localStorage.getItem("ads_total"))
    var seconds_total = parseFloat(localStorage.getItem("seconds_total"))

    var links_done = parseFloat(localStorage.getItem("links_done"))
    var ads_done = parseFloat(localStorage.getItem("ads_done"))
    var seconds_done = parseFloat(localStorage.getItem("seconds_done"))
}
*/
/*
function updateLinks() {
    links_done += 1
    var counter = document.getElementById("links-to-click")
    var dif = links_total - links_done
    if (dif>=0) {
        counter.innerHTML = dif
        localStorage.setItem("links_done",links_done)
    }
}

function updateAds() {
    ads_done += 1
    var counter = document.getElementById("ads-to-click")
    var dif = ads_total - ads_done
    if (dif>=0) {
        counter.innerHTML = dif
        localStorage.setItem("ads_done",ads_done)
    }
}

function updateSeconds() {
    seconds_done += 1
    var counter = document.getElementById("seconds-to-stay")
    var dif = seconds_total - seconds_done
    //console.log(dif)
    if (dif>=0) {
        counter.innerHTML = dif
        localStorage.setItem("seconds_done",seconds_done)
    }
}

function startCounter() {
    setInterval(updateTasks, 1000)
}

function initTasks() {
    var counter = document.getElementById("links-to-click")
    counter.innerHTML = links_total
    counter = document.getElementById("ads-to-click")
    counter.innerHTML = ads_total
    counter = document.getElementById("seconds-to-stay")
    counter.innerHTML = seconds_total

    var all_links = document.querySelectorAll("a")
    for (var i=0; i<all_links.length;i++) {
        all_links[0].onclick = function(event) { 
            updateLinks() 
        }
    }
    startCounter()
}

function updateTasks() {
    updateSeconds()
}
*/