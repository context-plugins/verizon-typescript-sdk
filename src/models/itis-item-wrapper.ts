import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itisItemContentSchema, type ItisItemContent } from "./itis-item-content.js";

export type ItisItemWrapper = {
  item: ItisItemContent;
};

export const itisItemWrapperSchema: Schema<ItisItemWrapper> = s.object<ItisItemWrapper>({
  item: itisItemContentSchema,
});
