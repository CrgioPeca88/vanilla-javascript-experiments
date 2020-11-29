'use strict';

import Ads from './ads.js';

function AdsPlugin() {
  this.ads = Ads.getInstance();
  this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
}

AdsPlugin.prototype.renderAd = function() {
  if(!this.currentAd) {    
    const ad = this.ads.getAd();
    this.currentAd = ad;
    console.log("ad --> ", ad);
  }
}

AdsPlugin.prototype.handleTimeUpdate = function() {
  const currentTime = Math.floor(this.media.currentTime);
  if(currentTime % 10 === 0) {
    this.renderAd();
  }
}

AdsPlugin.prototype.run = function(player) {
  this.player = player;
  this.media = player.media;
  this.media.addEventListener('timeupdate', this.handleTimeUpdate);
}

export default AdsPlugin;