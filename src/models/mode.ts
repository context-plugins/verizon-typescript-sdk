import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** the reporting mode of the tilt sensor */
export const Mode = {
  ReportOnChange: "reportOnChange",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
