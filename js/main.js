function loop() {
  var s = '',
    p;

  p = Math.floor(((Math.sin(Date.now()/300)+1)/2) * 100);

  while (p >= 8) {
    s += '█';
    p -= 8;
  }
  s += ['⠀','▏','▎','▍','▌','▋','▊','▉'][p];

  location.hash = s;
  setTimeout(loop, 50);
}
