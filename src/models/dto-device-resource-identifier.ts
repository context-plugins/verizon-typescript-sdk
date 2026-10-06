import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device identifiers, one or more are required */
export type DtoDeviceResourceIdentifier = {
  /**
   * the IEEE EUI64 address space used to identify a device. It is supplied by the device
   * manufacturer
   */
  deveui?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
  /** The Electronic Serial Number (ESN) of the device */
  esn?: number;
  /** The 20-digit Integrated Circuit Card ID (SIM card ID) */
  iccid?: string;
  /** The 15-digit International Mobile Equipment ID */
  imei?: number;
  /** The 64-bit International Mobile Subscriber Identity */
  imsi?: number;
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
  /** The UUID of the node the device is associated with */
  nodeUuid?: string;
  /** The numeric value of the Quick Response (QR) code */
  qrcode?: string;
  /** The device's serial number */
  serial?: string;
};

export const dtoDeviceResourceIdentifierSchema: Schema<DtoDeviceResourceIdentifier> =
  s.object<DtoDeviceResourceIdentifier>({
    deveui: s.optional(s.string()),
    deviceid: s.optional(s.string()),
    esn: s.optional(s.int()),
    iccid: s.optional(s.string()),
    imei: s.optional(s.int()),
    imsi: s.optional(s.int()),
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
