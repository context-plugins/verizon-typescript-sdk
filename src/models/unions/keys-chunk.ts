import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { enablePromoExpSchema, type EnablePromoExp } from "../enable-promo-exp.js";
import { keyDataPercentage50Schema, type KeyDataPercentage50 } from "../key-data-percentage50.js";
import { keyServicePlanSchema, type KeyServicePlan } from "../key-service-plan.js";
import { keysmsPercentage50Schema, type KeysmsPercentage50 } from "../keysms-percentage50.js";
import { noOfDaysB4PromoExpSchema, type NoOfDaysB4PromoExp } from "../no-of-days-b4-promo-exp.js";

export type KeysChunk =
  | KeyServicePlan
  | KeyDataPercentage50
  | KeysmsPercentage50
  | NoOfDaysB4PromoExp
  | EnablePromoExp;

export const keysChunkSchema: Schema<KeysChunk> = s.of<KeysChunk>(
  s.union([
    s.lazy(() => keyServicePlanSchema),
    s.lazy(() => keyDataPercentage50Schema),
    s.lazy(() => keysmsPercentage50Schema),
    s.lazy(() => noOfDaysB4PromoExpSchema),
    s.lazy(() => enablePromoExpSchema),
  ]),
);
