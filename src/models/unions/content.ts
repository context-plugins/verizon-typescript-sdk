import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { advisoryContentSchema, type AdvisoryContent } from "../advisory-content.js";
import { exitServiceContentSchema, type ExitServiceContent } from "../exit-service-content.js";
import { genericSignContentSchema, type GenericSignContent } from "../generic-sign-content.js";
import { speedLimitContentSchema, type SpeedLimitContent } from "../speed-limit-content.js";
import { workZoneContentSchema, type WorkZoneContent } from "../work-zone-content.js";

export type Content =
  | AdvisoryContent
  | WorkZoneContent
  | GenericSignContent
  | SpeedLimitContent
  | ExitServiceContent;

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([
    s.lazy(() => advisoryContentSchema),
    s.lazy(() => workZoneContentSchema),
    s.lazy(() => genericSignContentSchema),
    s.lazy(() => speedLimitContentSchema),
    s.lazy(() => exitServiceContentSchema),
  ]),
);
