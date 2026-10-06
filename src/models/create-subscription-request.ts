import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";

/** The details of the subscription that you want to create. */
export type CreateSubscriptionRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier?: AccountIdentifier;
  /** Descriptive information about the subscription. */
  description?: string;
  /** Enable or disable the subscription. A disabled subscription will not send any data. */
  disabled?: boolean;
  /** The address to which any error reports should be delivered. */
  email?: string;
  /**
   * String containing a $filter object with a property and value to filter out non-matching events.
   */
  filter?: string;
  billingaccountid?: string;
  /**
   * The type of event data to send via this subscription. This will be `ts.event` in most cases.
   * Other event types are `ts.event.diagnostics` for device diagnostic data,
   * `ts.event.configuration` for device configuration events, or `ts.event.security`. Note that the
   * device ThingSpace client must support sending specific event types for anything other than
   * `ts.event`.
   */
  streamkind?: string;
  /**
   * The ID of the target resource to be used when dispatching events. The corresponding target
   * should have a “stream” addressscheme.
   */
  targetid?: string;
  /** Name of the subscription. */
  name?: string;
  /**
   * Setting this value to `false` prevents the data returned from being aggregated and makes the
   * data easier to parse.
   */
  allowaggregation?: boolean;
};

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> =
  s.object<CreateSubscriptionRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    email: s.optional(s.string()),
    filter: s.optional(s.string()),
    billingaccountid: s.optional(s.string()),
    streamkind: s.optional(s.string()),
    targetid: s.optional(s.string()),
    name: s.optional(s.string()),
    allowaggregation: s.optional(s.boolean()),
  });
