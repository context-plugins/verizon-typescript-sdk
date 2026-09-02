import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gatewayidentifierSchema, type Gatewayidentifier } from "./gatewayidentifier.js";
import { onboardingSchema, type Onboarding } from "./onboarding.js";

export type DtoSensorOnBoardStatusRequest = {
  accountname?: string;
  gatewayidentifier?: Gatewayidentifier;
  onboarding?: Onboarding;
};

export const dtoSensorOnBoardStatusRequestSchema: Schema<DtoSensorOnBoardStatusRequest> =
  s.object<DtoSensorOnBoardStatusRequest>({
    accountname: s.optional(s.string()),
    gatewayidentifier: s.optional(s.lazy(() => gatewayidentifierSchema)),
    onboarding: s.optional(s.lazy(() => onboardingSchema)),
  });
