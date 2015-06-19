'use strict';

var koa      = require('koa');
var serve    = require('koa-static');
var compress = require('koa-compress');
var Router   = require('koa-router');
var marko    = require('marko');
var co       = require('co');
var zlib     = require('zlib');

var app = koa();
app.use(compress({ flush: zlib.Z_SYNC_FLUSH }));
app.use(serve(__dirname + '/public'));

function getShoppingCart() {
  var delay = 6000;
  var data = {
    items: [
      { title: 'learn php', author: 'coolwust', price: 20, quantity: 50 },
      { title: 'learn mysql', author: 'jun li', price: 40, quantity: 20 },
      { title: 'javascript', author: 'bbqixt', price: 60, quantity: 15 }
    ]
  };
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(data) }, delay);
  });
}

function getAdvertisements() {
  var delay = 3000;
  var data = {
    items: [
      { title: 'good book', url: 'www.book.com' },
      { title: 'good computer', url: 'www.computer.com' },
      { title: 'good food', url: 'www.food.com' }
    ],
    total: 64
  };
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(data) }, delay);
  });
}

var router = new Router();
router.get('/marko', function* (next) {
  var template = marko.load(require.resolve('../views/index.marko'));
  var data = {
    shoppingCart: getShoppingCart,
    ad: getAdvertisements
  }
  this.response.body = template.stream(data);
  this.response.type = 'html';
});

app.use(router.routes());
app.listen(3000);
