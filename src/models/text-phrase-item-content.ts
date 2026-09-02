import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextPhraseItemContent = {
  text: string;
};

export const textPhraseItemContentSchema: Schema<TextPhraseItemContent> = s.object<TextPhraseItemContent>({
  text: s.string(),
});
