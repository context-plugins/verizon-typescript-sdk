import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PositionError = {
  time?: string;
  utcoffset?: string;
  type?: string;
  info?: string;
};

export const positionErrorSchema: Schema<PositionError> = s.object<PositionError>({
  time: s.optional(s.string()),
  utcoffset: s.optional(s.string()),
  type: s.optional(s.string()),
  info: s.optional(s.string()),
});
