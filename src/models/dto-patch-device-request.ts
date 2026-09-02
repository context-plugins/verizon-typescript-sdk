import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";
import { resourceDeviceSchema, type ResourceDevice } from "./resource-device.js";

export type DtoPatchDeviceRequest = {
  accountname?: string;
  device?: ResourceDevice;
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoPatchDeviceRequestSchema: Schema<DtoPatchDeviceRequest> = s.object<DtoPatchDeviceRequest>({
  accountname: s.optional(s.string()),
  device: s.optional(s.lazy(() => resourceDeviceSchema)),
  resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
});
