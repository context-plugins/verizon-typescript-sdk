import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseOrItisSchema, type TextPhraseOrItis } from "./unions/text-phrase-or-itis.js";

export type GenericSignContent = {
  genericSign: TextPhraseOrItis[];
};

export const genericSignContentSchema: Schema<GenericSignContent> = s.object<GenericSignContent>({
  genericSign: s.array(s.lazy(() => textPhraseOrItisSchema)),
});
