import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genericPayloadSchema, type GenericPayload } from "./generic-payload.js";

export type GenericMessage = {
  generic: GenericPayload;
};

export const genericMessageSchema: Schema<GenericMessage> = s.object<GenericMessage>({
  generic: genericPayloadSchema,
});
