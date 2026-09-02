import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";
import { dtoFilterSchema, type DtoFilter } from "./dto-filter.js";

export type DtoListSensorDevicesRequest = {
  accountname?: string;
  filter?: DtoFilter;
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoListSensorDevicesRequestSchema: Schema<DtoListSensorDevicesRequest> =
  s.object<DtoListSensorDevicesRequest>({
    accountname: s.optional(s.string()),
    filter: s.optional(s.lazy(() => dtoFilterSchema)),
    resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
  });
