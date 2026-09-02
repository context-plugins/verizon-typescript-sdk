import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { certificateSchema, type Certificate } from "./certificate.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

export type ClientPersistenceResponse = {
  deviceId?: string;
  certificate?: Certificate;
  clientType?: EtxClientType;
  clientSubtype?: ClientSubtype;
  vendorId?: string;
};

export const clientPersistenceResponseSchema: Schema<ClientPersistenceResponse> =
  s.object<ClientPersistenceResponse>({
    deviceId: s.optional(s.string()),
    certificate: s.optional(s.lazy(() => certificateSchema)),
    clientType: s.optional(s.lazy(() => etxClientTypeSchema)),
    clientSubtype: s.optional(s.lazy(() => clientSubtypeSchema)),
    vendorId: s.optional(s.string()),
    _keysMap: {
      deviceId: "DeviceID",
      certificate: "Certificate",
      clientType: "ClientType",
      clientSubtype: "ClientSubtype",
      vendorId: "VendorID",
    },
  });
