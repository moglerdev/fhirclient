"use strict";

// In Browsers we create an adapter, get the SMART api from it and build the
// global FHIR object
const BrowserAdapter_1 = require("../adapters/BrowserAdapter");
const adapter = new BrowserAdapter_1.default();
const {
  ready,
  authorize,
  init,
  client,
  options,
  utils,
  getUserState
} = adapter.getSmartApi();
// $lab:coverage:off$
const FHIR = {
  AbortController: window.AbortController,
  client,
  utils,
  oauth2: {
    settings: options,
    ready,
    authorize,
    getUserState,
    init
  }
};
module.exports = FHIR;
// $lab:coverage:on$