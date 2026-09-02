import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccidentCauseCode = {
  accident2: number;
};

export const accidentCauseCodeSchema: Schema<AccidentCauseCode> = s.object<AccidentCauseCode>({
  accident2: s.number(),
});
