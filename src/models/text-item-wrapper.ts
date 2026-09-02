import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textItemContentSchema, type TextItemContent } from "./text-item-content.js";

export type TextItemWrapper = {
  item: TextItemContent;
};

export const textItemWrapperSchema: Schema<TextItemWrapper> = s.object<TextItemWrapper>({
  item: textItemContentSchema,
});
