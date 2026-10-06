import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gatewayidentifierSchema, type Gatewayidentifier } from "./gatewayidentifier.js";
import { offboardingSchema, type Offboarding } from "./offboarding.js";

export type DtoSensorOffBoardStatusRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  gatewayidentifier?: Gatewayidentifier;
  offboarding?: Offboarding;
};

export const dtoSensorOffBoardStatusRequestSchema: Schema<DtoSensorOffBoardStatusRequest> =
  s.object<DtoSensorOffBoardStatusRequest>({
    accountname: s.optional(s.string()),
    gatewayidentifier: s.optional(s.lazy(() => gatewayidentifierSchema)),
    offboarding: s.optional(s.lazy(() => offboardingSchema)),
  });
