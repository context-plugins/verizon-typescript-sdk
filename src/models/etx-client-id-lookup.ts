import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtxClientIdLookup = {
  deviceId?: string;
  imei?: string;
  iccid?: string;
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
