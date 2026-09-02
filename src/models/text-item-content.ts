import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextItemContent = {
  text: string;
};

export const textItemContentSchema: Schema<TextItemContent> = s.object<TextItemContent>({
  text: s.string(),
});
