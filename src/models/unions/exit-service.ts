import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { itisItemWrapperSchema, type ItisItemWrapper } from "../itis-item-wrapper.js";
import { textPhraseItemWrapperSchema, type TextPhraseItemWrapper } from "../text-phrase-item-wrapper.js";

export type ExitService = ItisItemWrapper | TextPhraseItemWrapper;

export const exitServiceSchema: Schema<ExitService> = s.of<ExitService>(
  s.union([s.lazy(() => itisItemWrapperSchema), s.lazy(() => textPhraseItemWrapperSchema)]),
);
