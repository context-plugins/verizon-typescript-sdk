import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoDeviceResourceIdentifier = {
  deveui?: string;
  deviceid?: string;
  esn?: number;
  iccid?: string;
  imei?: number;
  imsi?: number;
  mac?: string;
  manufacturer?: string;
  meid?: string;
  msisdn?: string;
  nodeUuid?: string;
  qrcode?: string;
  serial?: string;
};

export const dtoDeviceResourceIdentifierSchema: Schema<DtoDeviceResourceIdentifier> =
  s.object<DtoDeviceResourceIdentifier>({
    deveui: s.optional(s.string()),
    deviceid: s.optional(s.string()),
    esn: s.optional(s.number()),
    iccid: s.optional(s.string()),
    imei: s.optional(s.number()),
    imsi: s.optional(s.number()),
    mac: s.optional(s.string()),
    manufacturer: s.optional(s.string()),
    meid: s.optional(s.string()),
    msisdn: s.optional(s.string()),
    nodeUuid: s.optional(s.string()),
    qrcode: s.optional(s.string()),
    serial: s.optional(s.string()),
    _keysMap: {
      nodeUuid: "node_uuid",
    },
  });
