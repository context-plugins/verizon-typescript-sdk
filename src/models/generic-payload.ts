import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenericPayload = {
  messageType: string;
  messageFormat: string;
  payload: string;
};

export const genericPayloadSchema: Schema<GenericPayload> = s.object<GenericPayload>({
  messageType: s.string(),
  messageFormat: s.string(),
  payload: s.string(),
});
