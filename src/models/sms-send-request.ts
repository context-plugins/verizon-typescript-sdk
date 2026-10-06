import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Request to send SMS. */
export type SmsSendRequest = {
  /** The name of a billing account. */
  accountName: string;
  /**
   * The contents of the SMS message. The SMS message is limited to 160 characters in 7-bit format,
   * or 140 characters in 8-bit format.
   */
  smsMessage: string;
  /**
   * The names and values of custom fields, if you want to only include devices that have matching
   * custom fields.
   */
  customFields?: CustomFields[];
  /**
   * The SMS message encoding, which can be 7-bit (default), 8-bit-ASCII, 8-bit-UTF-8, 8-bit-DATA.
   */
  dataEncoding?: string;
  /** The devices that you want to send the message to, specified by device identifier. */
  deviceIds?: DeviceId[];
  /**
   * The name of a device group, if you want to send the SMS message to all devices in the device
   * group.
   */
  groupName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
  servicePlan?: string;
  /**
   * A period of time the message remains valid or an end date for the message. This value would be
   * less than the 5 day default.
   */
  timeToLive?: string;
};

export const smsSendRequestSchema: Schema<SmsSendRequest> = s.object<SmsSendRequest>({
  accountName: s.string(),
  smsMessage: s.string(),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  dataEncoding: s.optional(s.string()),
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  timeToLive: s.optional(s.string()),
});
