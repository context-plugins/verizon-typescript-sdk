import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";
import { resourceDeviceSchema, type ResourceDevice } from "./resource-device.js";

export type DtoPatchDeviceRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  device?: ResourceDevice;
  /** Device identifiers, one or more are required */
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoPatchDeviceRequestSchema: Schema<DtoPatchDeviceRequest> = s.object<DtoPatchDeviceRequest>({
  accountname: s.optional(s.string()),
  device: s.optional(s.lazy(() => resourceDeviceSchema)),
  resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
});
