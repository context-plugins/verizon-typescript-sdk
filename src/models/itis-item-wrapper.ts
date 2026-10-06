import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itisItemContentSchema, type ItisItemContent } from "./itis-item-content.js";

/** A wrapper carrying an ITIS code item. */
export type ItisItemWrapper = {
  /** An item object wrapping an ITIS code value. */
  item: ItisItemContent;
};

export const itisItemWrapperSchema: Schema<ItisItemWrapper> = s.object<ItisItemWrapper>({
  item: itisItemContentSchema,
});
