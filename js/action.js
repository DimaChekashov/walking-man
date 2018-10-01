function clearSprite(){
  ctx.clearRect(0, 0, scene.width, scene.height);
}

Man.prototype.draw = function(sprite) {
  clearSprite();
  ctx.drawImage(sprite, 0, 0, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.walkRight = function(sprite) {
  clearSprite();
  xPos = (xPos === 600 ? 0 : xPos + 10);
  ctx.drawImage(sprite, 0, 110, 80, 110, xPos, yPos, 80, 110);
  function draw(x) {
    console.log(x);
  }
  draw(xPos);
}

Man.prototype.walkLeft = function(sprite) {
  clearSprite();
  xPos = (xPos === 0 ? 520 : xPos - 10);
  ctx.drawImage(sprite, 0, 110, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.jump = function(sprite) {
  clearSprite();
  x = (x === 240 ? 0 : x + 80);
  ctx.drawImage(sprite, x, 0, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.seat = function(sprite) {
  clearSprite();
  ctx.drawImage(sprite, 240, 0, 80, 110, xPos, yPos, 80, 110);
}

window.onkeydown = function(e) {
  controlsKey.forEach(function(keyItem){
    if(keyItem.keyNum === e.keyCode){
      keyItem.action();
    }
  });
};

window.onkeyup = function(e) {
  man1.draw(man1.sprite);
}