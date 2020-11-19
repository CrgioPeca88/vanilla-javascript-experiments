function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  player.muted(true);
  player.play();
}

export default AutoPlay;