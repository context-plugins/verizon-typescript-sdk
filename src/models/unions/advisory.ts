import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { itisItemWrapperSchema, type ItisItemWrapper } from "../itis-item-wrapper.js";
import { textItemWrapperSchema, type TextItemWrapper } from "../text-item-wrapper.js";

export type Advisory = ItisItemWrapper | TextItemWrapper;

export const advisorySchema: Schema<Advisory> = s.of<Advisory>(
  s.union([s.lazy(() => itisItemWrapperSchema), s.lazy(() => textItemWrapperSchema)]),
);
