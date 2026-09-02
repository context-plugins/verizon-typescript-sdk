import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseOrItisSchema, type TextPhraseOrItis } from "./unions/text-phrase-or-itis.js";

export type ExitServiceContent = {
  exitService: TextPhraseOrItis[];
};

export const exitServiceContentSchema: Schema<ExitServiceContent> = s.object<ExitServiceContent>({
  exitService: s.array(s.lazy(() => textPhraseOrItisSchema)),
});
