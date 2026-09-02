import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frictionInformationSchema, type FrictionInformation } from "./friction-information.js";

export type ContentFrictionInfo = {
  frictionInfo: FrictionInformation;
};

export const contentFrictionInfoSchema: Schema<ContentFrictionInfo> = s.object<ContentFrictionInfo>({
  frictionInfo: frictionInformationSchema,
});
