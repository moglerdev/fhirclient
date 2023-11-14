"use strict";

const NodeAdapter_1 = require("../adapters/NodeAdapter");
function smart(request, response, storage) {
  return new NodeAdapter_1.default({
    request,
    response,
    storage
  }).getSmartApi();
}
smart.AbortController = AbortController;
module.exports = smart;