import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback registration request. */
export type HyperPreciseLocationCallback = {
  /** The name of the callback service that you want to subscribe to. */
  name: string;
  /**
   * The address on your server where you have enabled a listening service for the specific type of
   * callback messages. Specify a URL that is reachable from the Verizon data centers. If your
   * service is running on HTTPS, you should use a one-way authentication certificate with a
   * white-listed IP address.
   */
  url: string;
};

export const hyperPreciseLocationCallbackSchema: Schema<HyperPreciseLocationCallback> =
  s.object<HyperPreciseLocationCallback>({
    name: s.string(),
    url: s.string(),
  });
