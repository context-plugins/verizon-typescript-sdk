import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseItemContentSchema, type TextPhraseItemContent } from "./text-phrase-item-content.js";

export type TextPhraseItemWrapper = {
  item: TextPhraseItemContent;
};

export const textPhraseItemWrapperSchema: Schema<TextPhraseItemWrapper> = s.object<TextPhraseItemWrapper>({
  item: textPhraseItemContentSchema,
});
