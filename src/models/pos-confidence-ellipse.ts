import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PosConfidenceEllipse = {
  semiMajorConfidence: number;
  semiMinorConfidence: number;
  semiMajorOrientation: number;
};

export const posConfidenceEllipseSchema: Schema<PosConfidenceEllipse> = s.object<PosConfidenceEllipse>({
  semiMajorConfidence: s.number(),
  semiMinorConfidence: s.number(),
  semiMajorOrientation: s.number(),
});
