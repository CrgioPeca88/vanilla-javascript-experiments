'use strict';

function AutoPause() {
  this.threshold = 0.50;
  this.handleIntersection = this.handleIntersection.bind(this);
}

AutoPause.prototype.run = function(player) {
  this.player = player;
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold
  });
  observer.observe(this.player.media);
}

AutoPause.prototype.handleIntersection = function(entries) {
  const entry = entries[0];
  if(this.threshold <= entry.intersectionRatio) {
    this.player.play();
  } else {
    this.player.pause();
  }
}

export default AutoPause;