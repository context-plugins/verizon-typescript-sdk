import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An item object wrapping a text value. */
export type TextItemContent = {
  /** Simple text used with ITIS codes. (Text taken from SAE J2540.) */
  text: string;
};

export const textItemContentSchema: Schema<TextItemContent> = s.object<TextItemContent>({
  text: s.string(),
});
