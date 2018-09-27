var man1 = new Man("FoxSay", "img/PNG/Player/player_tilesheet.png");

man1.sprite.onload = function(){
  man1.draw(man1.sprite);
}