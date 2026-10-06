import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";
import { dtoFilterSchema, type DtoFilter } from "./dto-filter.js";

export type DtoListDevicesRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  filter?: DtoFilter;
  /** Device identifiers, one or more are required */
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoListDevicesRequestSchema: Schema<DtoListDevicesRequest> = s.object<DtoListDevicesRequest>({
  accountname: s.optional(s.string()),
  filter: s.optional(s.lazy(() => dtoFilterSchema)),
  resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
});
