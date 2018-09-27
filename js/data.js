var controlsKey = [
  {
    name: 'seat',
    keyNum: 40,
    action: function() {
      man1.seat(man1.sprite);
    },
  },
  {
    name: 'walkRight',
    keyNum: 39,
    action: function() {
      man1.walk(man1.sprite);
    },
  },
  {
    name: 'walkLeft',
    keyNum: 37,
    action: function() {
      man1.walk(man1.sprite);
    },
  },
  {
    name: 'jump',
    keyNum: 32,
    action: function() {
      man1.jump(man1.sprite);
    },
  }
]