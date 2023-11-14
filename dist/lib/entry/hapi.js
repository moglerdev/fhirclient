"use strict";

const HapiAdapter_1 = require("../adapters/HapiAdapter");
function smart(request, h, storage) {
  return new HapiAdapter_1.default({
    request,
    responseToolkit: h,
    storage
  }).getSmartApi();
}
smart.AbortController = AbortController;
module.exports = smart;