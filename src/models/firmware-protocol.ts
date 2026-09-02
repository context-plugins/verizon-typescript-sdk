import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FirmwareProtocol = {
  Lwm2M: "LWM2M",
  OmdDm: "OMD-DM",
  All: "all",
} as const;
export type FirmwareProtocol = (typeof FirmwareProtocol)[keyof typeof FirmwareProtocol] | (string & {});

export const firmwareProtocolSchema: EnumSchema<FirmwareProtocol> =
  s.enumOf<FirmwareProtocol>(FirmwareProtocol);
