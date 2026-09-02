import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSubtypeSchema, type ClientSubtype } from "./client-subtype.js";
import { etxClientTypeSchema, type EtxClientType } from "./etx-client-type.js";

export type DevicesFilter = {
  clientType?: EtxClientType;
  clientSubtype?: ClientSubtype;
  mecId?: string;
  pageSize?: number;
};

export const devicesFilterSchema: Schema<DevicesFilter> = s.object<DevicesFilter>({
  clientType: s.optional(s.lazy(() => etxClientTypeSchema)),
  clientSubtype: s.optional(s.lazy(() => clientSubtypeSchema)),
  mecId: s.optional(s.string()),
  pageSize: s.optional(s.number()),
  _keysMap: {
    clientType: "ClientType",
    clientSubtype: "ClientSubtype",
    mecId: "MecId",
    pageSize: "PageSize",
  },
});
