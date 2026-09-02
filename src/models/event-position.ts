import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { altitudeSchema, type Altitude } from "./altitude.js";
import { posConfidenceEllipseSchema, type PosConfidenceEllipse } from "./pos-confidence-ellipse.js";

export type EventPosition = {
  latitude: number;
  longitude: number;
  positionConfidenceEllipse: PosConfidenceEllipse;
  altitude: Altitude;
};

export const eventPositionSchema: Schema<EventPosition> = s.object<EventPosition>({
  latitude: s.number(),
  longitude: s.number(),
  positionConfidenceEllipse: posConfidenceEllipseSchema,
  altitude: altitudeSchema,
});
