import BrowserEnvironment from "./BrowserEnvironment";
import { JSDOM } from "jsdom";

const dom = new JSDOM("", { url: "http://localhost" });
(global as any).window = dom.window;

class BrowserEnvironmentWithFhirJs extends BrowserEnvironment {
  get fhir() {
    // $lab:coverage:off$
    return require("../../lib/nativeFhir");
    // $lab:coverage:on$
  }
}

export default BrowserEnvironmentWithFhirJs;
