import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type ResourceDevice = {
  /** Not used in this release, future functionality */
  accountclientid?: string;
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** The Identifier of chipset used by the device */
  chipset?: string;
  /** Timestamp of the record */
  createdon: Date;
  /**
   * Name/value pair, where the value is client defined. The purpose is to keep track of current
   * state per device action.
   */
  customdata?: Record<string, Record<string, unknown>>;
  /** a short description */
  description?: string;
  /** The Electronic Serial Number (ESN) of the device */
  esn?: number;
  /** Fields to return needed by search */
  fields?: DtoFields;
  /** UUID of the ECPD account the user belongs to */
  foreignid: string;
  /** The manufacturer's hardware version of the device */
  hardwareversion?: string;
  /** The 20-digit Integrated Circuit Card ID (SIM card ID) */
  iccid?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** The 15-digit International Mobile Equipment ID */
  imei?: number;
  /** The 64-bit International Mobile Subscriber Identity */
  imsi?: number;
  /** Timestamp of the record */
  lastupdated: Date;
  /** licenses assigned to the device */
  licenses?: string[];
  /**
   * The Media Access Control address of the device, listed on the device in the format
   * XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX
   */
  mac?: string;
  /** The manufacturer of the device */
  manufacturer?: string;
  /** The 56-bit Mobile Equipment ID */
  meid?: string;
  /**
   * The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit
   * phone number
   */
  msisdn?: string;
  /** User defined name of the record */
  name?: string;
  /**
   * this field is applicable for BLE sensors. This represents the value of parent gateway device
   */
  parentdeviceid?: string;
  /** The device model name */
  productmodel?: string;
  /** The id of the provider who is responible for talking to the device */
  providerid?: string;
  /** The numeric value of the Quick Response (QR) code */
  qrcode?: string;
  /** The device reference ID */
  refid?: string;
  /** The type of value represented by `refid` */
  refidtype?: string;
  /** The device's serial number */
  serial?: string;
  services?: string[];
  /** The Stock Keeping Unit (SKU) number of the device */
  sku?: string;
  /** the current device software version */
  softwareversion?: string;
  /** The current status of the device or transaction and will be `success` or `failed` */
  state: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
  versionid: string;
  /** Data retention period */
  eventretention?: number;
};

export const resourceDeviceSchema: Schema<ResourceDevice> = s.object<ResourceDevice>({
  accountclientid: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  chipset: s.optional(s.string()),
  createdon: s.dateTime(),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  description: s.optional(s.string()),
  esn: s.optional(s.int()),
  fields: s.optional(s.lazy(() => dtoFieldsSchema)),
  foreignid: s.string(),
  hardwareversion: s.optional(s.string()),
  iccid: s.optional(s.string()),
  id: s.optional(s.string()),
  imei: s.optional(s.int()),
  imsi: s.optional(s.int()),
  lastupdated: s.dateTime(),
  licenses: s.optional(s.array(s.string())),
  mac: s.optional(s.string()),
  manufacturer: s.optional(s.string()),
  meid: s.optional(s.string()),
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
  eventretention: s.optional(s.int()),
});
