import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseOrItisSchema, type TextPhraseOrItis } from "./unions/text-phrase-or-itis.js";

export type SpeedLimitContent = {
  speedLimit: TextPhraseOrItis[];
};

export const speedLimitContentSchema: Schema<SpeedLimitContent> = s.object<SpeedLimitContent>({
  speedLimit: s.array(s.lazy(() => textPhraseOrItisSchema)),
});
