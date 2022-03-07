
function checkVisibility() {
    if (sessionStorage.visibility==null) {
        sessionStorage.visibility = "hidden"
        document.getElementById("task-banner").style.visibility = "hidden"
    }
    else {
        document.getElementById("task-banner").style.visibility = sessionStorage.visibility
    }
}


function startup() {
    if (sessionStorage.length<6) {
        var links_total = Math.floor(Math.random()*4+1)
        var ads_total = Math.floor(Math.random()*3+1)
        var seconds_total = Math.floor(Math.random()*80 + 10)
        var links_done = 0
        var ads_done = 0
        var seconds_done = 0

        sessionStorage.setItem("visibility","hidden")
        sessionStorage.setItem("links_total",links_total)
        sessionStorage.setItem("ads_total",ads_total)
        sessionStorage.setItem("seconds_total",seconds_total)

        sessionStorage.setItem("links_done",links_done)
        sessionStorage.setItem("ads_done",ads_done)
        sessionStorage.setItem("seconds_done",seconds_done)
    }
}

function updateLinks(event) {
    var dif = parseFloat(sessionStorage.links_total - sessionStorage.links_done)
    if (dif>0) {
        sessionStorage.links_done = parseFloat(sessionStorage.links_done) + 1
        var counter = document.getElementById("links-to-click")
        counter.innerHTML = dif - 1
    }
}

function updateAds() {
    var dif = parseFloat(sessionStorage.ads_total - sessionStorage.ads_done)
    if (dif>0) {
        sessionStorage.ads_done = parseFloat(sessionStorage.ads_done) + 1
        var counter = document.getElementById("ads-to-click")
        counter.innerHTML = dif - 1
    }
}

function updateSeconds() {
    var dif = parseFloat(sessionStorage.seconds_total - sessionStorage.seconds_done)
    if (dif>0) {
        sessionStorage.seconds_done = parseFloat(sessionStorage.seconds_done) + 1
        var counter = document.getElementById("seconds-to-stay")
        counter.innerHTML = dif - 1
    }
}

function startCounter() {
    setInterval(updateSeconds, 1000)
    setInterval(checkFinished, 1000)
}

function initTasks() {
    startup()
    var counter = document.getElementById("links-to-click")
    counter.innerHTML = sessionStorage.links_total - sessionStorage.links_done
    counter = document.getElementById("ads-to-click")
    counter.innerHTML = sessionStorage.ads_total - sessionStorage.ads_done
    counter = document.getElementById("seconds-to-stay")
    counter.innerHTML = sessionStorage.seconds_total - sessionStorage.seconds_done

    attachLinksSnooper()
    attachAdsSnooper()
    startCounter()
}

function attachLinksSnooper() {
    var all_links = document.querySelectorAll("a")
    var linkStates = sessionStorage.linkStates
    if (linkStates==null) {
        sessionStorage.linkStates = JSON.stringify(Array(all_links.length).fill(true))
    }
    for (var i=0; i<all_links.length;i++) {
        if (JSON.parse(sessionStorage.linkStates)[i]) {
            var link = all_links[i]
            link.onmousedown = function(event) {
                updateLinks(event)
            }
            link.addEventListener('mousedown', function (event) {
                var src = event.srcElement
                if (src.onmousedown!=null) {
                    src.onmousedown=null
                }
                var all_links = document.querySelectorAll("a")
                for (var j=0; j<all_links.length;j++) {
                    if (all_links[j]==src) {
                        var newLinkStates = JSON.parse(sessionStorage.linkStates)
                        newLinkStates[j] = false
                        sessionStorage.linkStates = JSON.stringify(newLinkStates)
                        break
                    }
                }
                //var url = event.target.href;
                //window.open(url, '_self');
                //event.preventDefault();
            })
        }
    }
}

function attachAdsSnooper() {
    setInterval(function(){
        var activeE = document.activeElement;
        if(activeE && activeE.tagName == 'IFRAME'){
            console.log(activeE.tagName)
            updateAds()
        }
    }, 100);
}


function checkFinished() {
    var links = sessionStorage.links_total - sessionStorage.links_done
    var ads = sessionStorage.ads_total - sessionStorage.ads_done
    var seconds = sessionStorage.seconds_total - sessionStorage.seconds_done
    if (links==0 & ads==0 & seconds==0) {
        document.getElementById("task-banner").innerHTML = '(1): 1<br class="task">(2): 2<br class="task">(3): 1<br class="task">(4): 3<br class="task">(5): 2'
    }

}

