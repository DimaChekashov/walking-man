var scene = document.getElementById('mainScene'),
    ctx = scene.getContext('2d'),
    xPos = 260,
    yPos = 290;

var x = 0;

function Man(namePlayer, spriteSrc) {
  this.namePlayer = namePlayer;
  this.spriteSrc = spriteSrc;
  this.sprite = new Image();
  this.sprite.src = this.spriteSrc;
}