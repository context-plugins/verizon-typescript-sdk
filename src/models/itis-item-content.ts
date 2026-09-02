import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItisItemContent = {
  itis: number;
};

export const itisItemContentSchema: Schema<ItisItemContent> = s.object<ItisItemContent>({
  itis: s.number(),
});
