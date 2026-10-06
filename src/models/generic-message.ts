import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { genericPayloadSchema, type GenericPayload } from "./generic-payload.js";

/** A message carrying a generic (custom) V2X payload. */
export type GenericMessage = {
  /**
   * Custom message which is defined by the user and can support "any" message type or format.
   *
   * **Note:** ETX prefers the j2735 or the j2735_gr encoding and only vendor specific message types
   * are allowed to be published in different message formats.
   */
  generic: GenericPayload;
};

export const genericMessageSchema: Schema<GenericMessage> = s.object<GenericMessage>({
  generic: genericPayloadSchema,
});
