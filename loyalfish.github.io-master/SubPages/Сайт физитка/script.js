let field = document.getElementById('field');
let ctx = field.getContext("2d");
let player = {
    sprite : new Image(),
    x : 0,
    y : 0,
}



player.sprite.src = "img/player.png";
field.width = window.innerWidth
field.height = window.innerHeight

function draw() {
    let plyr = new Image()
    let bg = new Image()

    bg.src = "img/background.jpg"
    bg.onload = () => {
        ctx.drawImage(bg,0,0)
    }

    plyr.src = new Image(100,100)
    plyr.src = "img/player.png"
    plyr.onload = () => {
        ctx.drawImage(plyr,player.x,player.y)
    }
} 

$(field).on("mousemove", function(e) {
    player.x = e.offsetX
    player.y = e.offsetY
    draw()
});

draw()

