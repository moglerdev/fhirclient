// In Browsers we create an adapter, get the SMART api from it and build the
// global FHIR object
import BrowserAdapter from "../adapters/BrowserAdapter";

const adapter = new BrowserAdapter();
const { ready, authorize, init, client, options, utils, getUserState } =
  adapter.getSmartApi();

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
    init,
  },
};

export = FHIR;
// $lab:coverage:on$
