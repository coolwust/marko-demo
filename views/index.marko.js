function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___node_modules_marko_node_modules_marko_async_async_fragment_tag_js = __renderer(require("marko/node_modules/marko-async/async-fragment-tag")),
      __tag = __helpers.t,
      forEach = __helpers.f,
      escapeXml = __helpers.x,
      ___node_modules_marko_node_modules_marko_async_async_fragments_tag_js = __renderer(require("marko/node_modules/marko-async/async-fragments-tag"));

  return function render(data, out) {
    out.w('<!doctype html> <html><head><title>Marko Test</title></head><body>');
    __tag(out,
      ___node_modules_marko_node_modules_marko_async_async_fragment_tag_js,
      {
        "dataProvider": data.shoppingCart,
        "clientReorder": true,
        "_name": "data.shoppingCart",
        "placeholder": out.captureString(function() {
            out.w('loading...');
          })
      },
      function(out, cart) {
        out.w('<table border="2">');

        forEach(cart.items, function(item) {
          out.w('<tr><td>' +
            escapeXml(item.title) +
            '</td><td>' +
            escapeXml(item.author) +
            '</td><td>' +
            escapeXml(item.price) +
            '</td><td>' +
            escapeXml(item.quantity) +
            '</td></tr>');
        });

        out.w('</table>');
      });

    out.w('<div>----------------------------------------------------------- <br> -----------------------------------------------------------</div>');
    __tag(out,
      ___node_modules_marko_node_modules_marko_async_async_fragment_tag_js,
      {
        "dataProvider": data.ad,
        "clientReorder": true,
        "_name": "data.ad",
        "placeholder": out.captureString(function() {
            out.w('loading...');
          })
      },
      function(out, ad) {
        out.w('<table border="2">');

        forEach(ad.items, function(item) {
          out.w('<tr><td>' +
            escapeXml(item.title) +
            '</td><td>' +
            escapeXml(item.url) +
            '</td></tr>');
        });

        out.w('</table>');
      });
    __tag(out,
      ___node_modules_marko_node_modules_marko_async_async_fragments_tag_js,
      {},
      function(out) {
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);