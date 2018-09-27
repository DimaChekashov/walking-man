var scene = document.getElementById('mainScene'),
    ctx = scene.getContext('2d');

var x = 0;

function Man(namePlayer, spriteSrc) {
  this.namePlayer = namePlayer;
  this.spriteSrc = spriteSrc;
  this.sprite = new Image();
  this.sprite.src = this.spriteSrc;
}