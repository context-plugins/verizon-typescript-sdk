import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { itisItemWrapperSchema, type ItisItemWrapper } from "../itis-item-wrapper.js";
import { textPhraseItemWrapperSchema, type TextPhraseItemWrapper } from "../text-phrase-item-wrapper.js";

/**
 * A data frame to allow sequences of ITIS codes, short text strings, and numerical values to be
 * expressed in the normal ITIS vocabulary method and pattern. Note that the allowed text strings
 * are more limited than the normal ITIS format in order to conserve bandwidth.
 */
export type TextPhraseOrItis = ItisItemWrapper | TextPhraseItemWrapper;

export const textPhraseOrItisSchema: Schema<TextPhraseOrItis> = s.of<TextPhraseOrItis>(
  s.union([s.lazy(() => itisItemWrapperSchema), s.lazy(() => textPhraseItemWrapperSchema)]),
);
