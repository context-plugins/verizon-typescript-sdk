import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

export type ClientRegistrationRequestV2 = {
  clientType: EtxClientType;
  clientSubtype: ClientSubtype;
  vendorId: string;
  deviceId?: string;
  imei?: string;
  iccid?: string;
  imsi?: string;
};

export const clientRegistrationRequestV2Schema: Schema<ClientRegistrationRequestV2> =
  s.object<ClientRegistrationRequestV2>({
    clientType: etxClientTypeSchema,
    clientSubtype: clientSubtypeSchema,
    vendorId: s.string(),
    deviceId: s.optional(s.string()),
    imei: s.optional(s.string()),
    iccid: s.optional(s.string()),
    imsi: s.optional(s.string()),
    _keysMap: {
      clientType: "ClientType",
      clientSubtype: "ClientSubtype",
      vendorId: "VendorID",
      deviceId: "DeviceID",
      imei: "IMEI",
      iccid: "ICCID",
      imsi: "IMSI",
    },
  });
