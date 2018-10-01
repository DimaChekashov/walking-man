var scene = document.getElementById('mainScene'),
    ctx = scene.getContext('2d'),
    yPos = 290,
    playerXPos = 260,
    playerYPos = 260;

var x = 0;

function Man(namePlayer, spriteSrc) {
  this.namePlayer = namePlayer;
  this.spriteSrc = spriteSrc;
  this.sprite = new Image();
  this.sprite.src = this.spriteSrc;
}