import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdforplannerSchema, type DeviceIdforplanner } from "./device-idforplanner.js";
import { privateNetworkApnsSchema, type PrivateNetworkApns } from "./private-network-apns.js";

export type DeviceListforplanner = {
  deviceIds?: DeviceIdforplanner[] | null;
  privateNetworkApns?: PrivateNetworkApns[] | null;
  ipAddress?: string | null;
  activationCode?: string | null;
};

export const deviceListforplannerSchema: Schema<DeviceListforplanner> = s.object<DeviceListforplanner>({
  deviceIds: s.optionalNullable(s.array(s.lazy(() => deviceIdforplannerSchema))),
  privateNetworkApns: s.optionalNullable(s.array(s.lazy(() => privateNetworkApnsSchema))),
  ipAddress: s.optionalNullable(s.string()),
  activationCode: s.optionalNullable(s.string()),
});
