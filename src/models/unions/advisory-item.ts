import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { itisItemWrapperSchema, type ItisItemWrapper } from "../itis-item-wrapper.js";
import { textItemWrapperSchema, type TextItemWrapper } from "../text-item-wrapper.js";

export type AdvisoryItem = ItisItemWrapper | TextItemWrapper;

export const advisoryItemSchema: Schema<AdvisoryItem> = s.of<AdvisoryItem>(
  s.union([s.lazy(() => itisItemWrapperSchema), s.lazy(() => textItemWrapperSchema)]),
);
