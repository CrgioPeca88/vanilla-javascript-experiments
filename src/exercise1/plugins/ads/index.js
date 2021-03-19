'use strict';

import Ads from './ads.js';

function AdsPlugin() {
  this.ads = Ads.getInstance();
  this.adsContainer = document.createElement('div');
  this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
}

AdsPlugin.prototype.renderAd = function() {
  if(!this.currentAd) {    
    const ad = this.ads.getAd();
    this.currentAd = ad;
    this.adsContainer.innerHTML = `
      <div>
        <a href="${this.currentAd.url}" target="_blank">
          <h4>${this.currentAd.title}</h4>
          <h5>${this.currentAd.body}</h5>
        </a>
      </div>
    `;
  }
  setTimeout(() => {
    this.currentAd = null;
    this.adsContainer.innerHTML = '';
  }, 5000);
}

AdsPlugin.prototype.handleTimeUpdate = function() {
  const currentTime = Math.floor(this.media.currentTime);
  if(currentTime % 10 === 0) {
    this.renderAd();
  }
}

AdsPlugin.prototype.run = function(player) {
  this.player = player;
  this.player.container.appendChild(this.adsContainer);
  this.media = player.media;
  this.media.addEventListener('timeupdate', this.handleTimeUpdate);
}

export default AdsPlugin;