import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An item object wrapping a text phrase value. */
export type TextPhraseItemContent = {
  /**
   * Text phrase provides very short sections of text interspersed between the ITIS codes to create
   * phrases. In general, this is used for expressing proper nouns, such as street names reflecting
   * local expressions that do not appear in the ITIS tables.
   */
  text: string;
};

export const textPhraseItemContentSchema: Schema<TextPhraseItemContent> = s.object<TextPhraseItemContent>({
  text: s.string(),
});
