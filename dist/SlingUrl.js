"use strict";function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}var SlingUrl=function n(l){_classCallCheck(this,n),l=l.startsWith("/")?"h://t.co"+l:l,this._url=new URL(l);var e=function(n){return-1<n.indexOf(".")},i=this._url.pathname,t=i.indexOf("."),s=-1<t,r=i.split("/"),o=r.filter(e)[0];if(this.resourcePath=s?i.substring(0,t):i,o){var u=o.split(".");if(u.length){var a=u[u.length-1];this.extension=a||null;var f=u.slice(1,u.length-1);this.selectors=0<f.length?f:null}}else this.extension=null,this.selectors=null;var c=r.findIndex(e),h=-1<c?r.slice(c+1).join("/"):null;this.suffix=h?"/"+h:null};"undefined"!=typeof module&&void 0!==module.exports?module.exports=SlingUrl:"function"==typeof define&&define.amd?define([],function(){return SlingUrl}):window.SlingUrl=SlingUrl;