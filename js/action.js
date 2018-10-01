Man.prototype.draw = function(sprite) {
  ctx.clearRect(0, 0, scene.width, scene.height);
  ctx.drawImage(sprite, 0, 0, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.walkRight = function(sprite) {
  ctx.clearRect(0, 0, scene.width, scene.height);
  xPos = (xPos === 600 ? 0 : xPos + 10);
  ctx.drawImage(sprite, 0, 110, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.walkLeft = function(sprite) {
  ctx.clearRect(0, 0, scene.width, scene.height);
  xPos = (xPos === 0 ? 520 : xPos - 10);
  ctx.drawImage(sprite, 0, 110, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.jump = function(sprite) {
  ctx.clearRect(0, 0, scene.width, scene.height);
  x = (x === 240 ? 0 : x + 80);
  ctx.drawImage(sprite, x, 0, 80, 110, xPos, yPos, 80, 110);
}

Man.prototype.seat = function(sprite) {
  ctx.clearRect(0, 0, scene.width, scene.height);
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