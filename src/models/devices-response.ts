import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

export type DevicesResponse = {
  deviceId: string;
  clientType: EtxClientType;
  clientSubtype: ClientSubtype;
  mecIds: string[] | null;
};

export const devicesResponseSchema: Schema<DevicesResponse> = s.object<DevicesResponse>({
  deviceId: s.string(),
  clientType: etxClientTypeSchema,
  clientSubtype: clientSubtypeSchema,
  mecIds: s.nullable(s.array(s.string())),
  _keysMap: {
    deviceId: "DeviceID",
    clientType: "ClientType",
    clientSubtype: "ClientSubtype",
    mecIds: "MecIds",
  },
});
