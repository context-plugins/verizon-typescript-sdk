import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the device's network connection at the time of the request. If the device is on the
 * Verizon cellular network it should use the "VZ" value otherwise the "non-VZ" value.
 *
 * Devices on the Verizon network can directly access the ETX Message Exchange on the MEC (Mobile
 * Edge Compute server)
 */
export const NetworkType = {
  Vz: "VZ",
  NonVz: "non-VZ",
} as const;
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType] | (string & {});

export const networkTypeSchema: EnumSchema<NetworkType> = s.enumOf<NetworkType>(NetworkType);
