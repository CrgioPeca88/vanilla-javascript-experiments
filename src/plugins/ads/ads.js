'use strict';

const ALL_ADS = [{
  imageUrl: '../../../assets/images/kawa.png',
  title: 'Lanzamiento kawasaki ninja ZX10R 2021',
  body: 'Video de la presentación oficial de la nueva ninja ZX10R',
  url: 'https://www.youtube.com/watch?v=jiihCxyb_Wc&t=508s'
}, {
  imageUrl: '../../../assets/images/yamaha.png',
  title: 'Lanzamiento yamaha MT09 2021',
  body: 'Video de la presentación oficial de la nueva yamaha MT09',
  url: 'youtube.com/watch?v=TUQNl45Hzbo'
}];

function Ads() {
  this.ads = [...ALL_ADS];
}

Ads.prototype.getInstance = function() {
  if (!this.instance) {
    this.instance = new Ads();
  }
  return this.instance;
}

Ads.prototype.getAd = function() {
  if(this.ads.length === 0) {
    this.ads = [...ALL_ADS];
  }
  return this.ads.pop();
}

export default new Ads();