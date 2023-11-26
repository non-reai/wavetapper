async function wait(ms) {
    return new Promise((res, rej)=>{
        setTimeout(res, ms);
    })
}

async function start() {
    let music = new Audio("wavetapper.mp3")
    
    await new Promise((res, rej)=>{
        music.addEventListener("canplaythrough", (e)=>{
            res()
        })
    })

    console.log("loaded")

    const red = window.open("red.html", "_Blank","popup=true,left=10,top=10")
    red.resizeTo(500,500)
    red.moveTo(window.outerWidth / 2 - 250, window.outerHeight / 2 - 250)

    music.play()

    await wait(2165)

    red.document.body.style.backgroundColor = "#d65847"
}