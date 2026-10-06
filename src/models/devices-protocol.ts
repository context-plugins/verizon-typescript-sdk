import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Firmware protocol. Valid values include: LWM2M, OMADM, HTTP. */
export const DevicesProtocol = {
  Lwm2M: "LWM2M",
  Omdadm: "OMDADM",
  Http: "HTTP",
} as const;
export type DevicesProtocol = (typeof DevicesProtocol)[keyof typeof DevicesProtocol] | (string & {});

export const devicesProtocolSchema: EnumSchema<DevicesProtocol> = s.enumOf<DevicesProtocol>(DevicesProtocol);
