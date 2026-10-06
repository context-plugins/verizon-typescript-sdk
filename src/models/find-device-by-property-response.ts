import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Change Configuration resource definition. */
export type FindDeviceByPropertyResponse = {
  /** Billing account ID of the resource. */
  billingaccountid?: string;
  /** The date the resource was created. */
  createdon?: string;
  eventretention?: string;
  /** Cellular SIM card identifier. */
  iccid?: string;
  /** ThingSpace unique ID for the device that was added. */
  id?: string;
  /** 4G hardware device identifier. */
  imei?: string;
  /** Identifies the resource kind. */
  kind?: string;
  /** The date the resource was last updated. */
  lastupdated?: string;
  /** The device’s service provider. */
  providerid?: string;
  /** The value of the refidtype identifier. */
  refid?: string;
  /** The device identifier type used to refer to this device. */
  refidtype?: string;
  /** Service state of the device. */
  state?: string;
  /** Version of the underlying schema resource. */
  version?: string;
  /** The version of the resource. */
  versionid?: string;
};

export const findDeviceByPropertyResponseSchema: Schema<FindDeviceByPropertyResponse> =
  s.object<FindDeviceByPropertyResponse>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.string()),
    eventretention: s.optional(s.string()),
    iccid: s.optional(s.string()),
    id: s.optional(s.string()),
    imei: s.optional(s.string()),
    kind: s.optional(s.string()),
    lastupdated: s.optional(s.string()),
    providerid: s.optional(s.string()),
    refid: s.optional(s.string()),
    refidtype: s.optional(s.string()),
    state: s.optional(s.string()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });
