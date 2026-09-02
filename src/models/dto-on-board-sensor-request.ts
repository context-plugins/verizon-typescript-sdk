import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payloadSchema, type Payload } from "./payload.js";

export type DtoOnBoardSensorRequest = {
  accountname?: string;
  payload?: Payload;
};

export const dtoOnBoardSensorRequestSchema: Schema<DtoOnBoardSensorRequest> =
  s.object<DtoOnBoardSensorRequest>({
    accountname: s.optional(s.string()),
    payload: s.optional(s.lazy(() => payloadSchema)),
  });
