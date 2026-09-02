import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textPhraseOrItisSchema, type TextPhraseOrItis } from "./unions/text-phrase-or-itis.js";

export type WorkZoneContent = {
  workZone: TextPhraseOrItis[];
};

export const workZoneContentSchema: Schema<WorkZoneContent> = s.object<WorkZoneContent>({
  workZone: s.array(s.lazy(() => textPhraseOrItisSchema)),
});
