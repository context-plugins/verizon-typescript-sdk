import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textItemContentSchema, type TextItemContent } from "./text-item-content.js";

/** A wrapper carrying a text item. */
export type TextItemWrapper = {
  /** An item object wrapping a text value. */
  item: TextItemContent;
};

export const textItemWrapperSchema: Schema<TextItemWrapper> = s.object<TextItemWrapper>({
  item: textItemContentSchema,
});
