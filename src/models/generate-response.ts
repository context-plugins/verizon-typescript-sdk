import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { generateResponseItemSchema, type GenerateResponseItem } from "./generate-response-item.js";

export type GenerateResponse = {
  items?: GenerateResponseItem[];
};

export const generateResponseSchema: Schema<GenerateResponse> = s.object<GenerateResponse>({
  items: s.optional(s.array(s.lazy(() => generateResponseItemSchema))),
});
