import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseOrItisSchema, type TextPhraseOrItis } from "./unions/text-phrase-or-itis.js";

/** DataFrame content variant carrying speed limit information. */
export type SpeedLimitContent = {
  /** List of speed limits and cautions. */
  speedLimit: TextPhraseOrItis[];
};

export const speedLimitContentSchema: Schema<SpeedLimitContent> = s.object<SpeedLimitContent>({
  speedLimit: s.array(s.lazy(() => textPhraseOrItisSchema)),
});
