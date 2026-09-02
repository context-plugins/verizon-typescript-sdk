import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImpassabilityCauseCode = {
  impassability5: number;
};

export const impassabilityCauseCodeSchema: Schema<ImpassabilityCauseCode> = s.object<ImpassabilityCauseCode>({
  impassability5: s.number(),
});
