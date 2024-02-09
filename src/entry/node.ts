import NodeAdapter from "../adapters/NodeAdapter";
import { IncomingMessage, ServerResponse } from "http";
import { fhirclient } from "../types";

type storageFactory = (options?: Record<string, any>) => fhirclient.Storage;

function smart(
  request: IncomingMessage,
  response: ServerResponse,
  storage?: fhirclient.Storage | storageFactory
) {
  return new NodeAdapter({
    request,
    response,
    storage,
  }).getSmartApi();
}

smart.AbortController = AbortController;

export = smart;
