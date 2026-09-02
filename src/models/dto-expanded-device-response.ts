import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type DtoExpandedDeviceResponse = {
  accountclientid?: string;
  billingaccountid?: string;
  chipset?: string;
  commands?: Record<string, Record<string, unknown>>;
  createdon: Date;
  customdata?: Record<string, Record<string, unknown>>;
  description?: string;
  esn?: number;
  fields?: DtoFields;
  foreignid: string;
  hardwareversion?: string;
  iccid?: string;
  id?: string;
  imei?: number;
  imsi?: number;
  lastupdated: Date;
  licenses?: string[];
  mac?: string;
  manufacturer?: string;
  meid?: string;
  modelmetadata?: Record<string, unknown>;
  msisdn?: string;
  name?: string;
  parentdeviceid?: string;
  productmodel?: string;
  providerid?: string;
  qrcode?: string;
  refid?: string;
  refidtype?: string;
  serial?: string;
  services?: string[];
  sku?: string;
  softwareversion?: string;
  state: string;
  version?: string;
  versionid: string;
};

export const dtoExpandedDeviceResponseSchema: Schema<DtoExpandedDeviceResponse> =
  s.object<DtoExpandedDeviceResponse>({
    accountclientid: s.optional(s.string()),
    billingaccountid: s.optional(s.string()),
    chipset: s.optional(s.string()),
    commands: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    createdon: s.dateTime(),
    customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    description: s.optional(s.string()),
    esn: s.optional(s.number()),
    fields: s.optional(s.lazy(() => dtoFieldsSchema)),
    foreignid: s.string(),
    hardwareversion: s.optional(s.string()),
    iccid: s.optional(s.string()),
    id: s.optional(s.string()),
    imei: s.optional(s.number()),
    imsi: s.optional(s.number()),
    lastupdated: s.dateTime(),
    licenses: s.optional(s.array(s.string())),
    mac: s.optional(s.string()),
    manufacturer: s.optional(s.string()),
    meid: s.optional(s.string()),
    modelmetadata: s.optional(s.record(s.string(), s.unknown())),
    msisdn: s.optional(s.string()),
    name: s.optional(s.string()),
    parentdeviceid: s.optional(s.string()),
    productmodel: s.optional(s.string()),
    providerid: s.optional(s.string()),
    qrcode: s.optional(s.string()),
    refid: s.optional(s.string()),
    refidtype: s.optional(s.string()),
    serial: s.optional(s.string()),
    services: s.optional(s.array(s.string())),
    sku: s.optional(s.string()),
    softwareversion: s.optional(s.string()),
    state: s.string(),
    version: s.optional(s.string()),
    versionid: s.string(),
  });
