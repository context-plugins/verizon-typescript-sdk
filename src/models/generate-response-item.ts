import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  generateResponseItemCredentialSchema,
  type GenerateResponseItemCredential,
} from "./generate-response-item-credential.js";

export type GenerateResponseItem = {
  imei?: string;
  credential?: GenerateResponseItemCredential;
};

export const generateResponseItemSchema: Schema<GenerateResponseItem> = s.object<GenerateResponseItem>({
  imei: s.optional(s.string()),
  credential: s.optional(s.lazy(() => generateResponseItemCredentialSchema)),
});
