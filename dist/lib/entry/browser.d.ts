declare const FHIR: {
    AbortController: {
        new (): AbortController;
        prototype: AbortController;
    };
    client: (state: string | import("../types").fhirclient.ClientState) => import("../Client").default;
    utils: any;
    oauth2: {
        settings: import("../types").fhirclient.BrowserFHIRSettings;
        ready: (options?: import("../types").fhirclient.ReadyOptions) => Promise<import("../Client").default>;
        authorize: (options: import("../types").fhirclient.AuthorizeParams, userState?: unknown) => Promise<string | void>;
        getUserState: () => Promise<unknown>;
        init: (options: import("../types").fhirclient.AuthorizeParams, userState?: unknown) => Promise<import("../Client").default>;
    };
};
export = FHIR;
