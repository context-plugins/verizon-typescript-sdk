import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";

export type DtoLastReportedTimeRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  /** Device identifiers, one or more are required */
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoLastReportedTimeRequestSchema: Schema<DtoLastReportedTimeRequest> =
  s.object<DtoLastReportedTimeRequest>({
    accountname: s.optional(s.string()),
    resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
  });
