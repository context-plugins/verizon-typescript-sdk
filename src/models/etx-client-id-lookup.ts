import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Lookup object for identifying an ETX client. One of the following IDs is required: DeviceID,
 * IMEI, ICCID, or IMSI. If more than one ID is provided, the API will use the first ID found in the
 * following order: DeviceID, IMEI, ICCID, IMSI.
 */
export type EtxClientIdLookup = {
  /**
   * The generated ID (UUID v4) for the device. It can be used as:
   *   - the MQTT Client ID when connecting to the Message Exchange system
   *   - a parameter when asking for the connection endpoint
   *   - a parameter when finishing the device registration
   *   - a parameter when unregistering the device
   */
  deviceId?: string;
  /** The IMEI number of the device. */
  imei?: string;
  /** The ICCID number of the device. */
  iccid?: string;
  /** The IMSI number of the device. */
  imsi?: string;
};

export const etxClientIdLookupSchema: Schema<EtxClientIdLookup> = s.object<EtxClientIdLookup>({
  deviceId: s.optional(s.string()),
  imei: s.optional(s.string()),
  iccid: s.optional(s.string()),
  imsi: s.optional(s.string()),
  _keysMap: {
    deviceId: "DeviceID",
    imei: "IMEI",
    iccid: "ICCID",
    imsi: "IMSI",
  },
});
