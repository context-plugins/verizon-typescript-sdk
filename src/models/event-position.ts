import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { altitudeSchema, type Altitude } from "./altitude.js";
import { posConfidenceEllipseSchema, type PosConfidenceEllipse } from "./pos-confidence-ellipse.js";

export type EventPosition = {
  /** Latitude of the event location in microdegrees (900000001 shall be used when unavailable). */
  latitude: number;
  /**
   * Longitude of the event location in microdegrees (1800000001 shall be used when unavailable).
   */
  longitude: number;
  positionConfidenceEllipse: PosConfidenceEllipse;
  altitude: Altitude;
};

export const eventPositionSchema: Schema<EventPosition> = s.object<EventPosition>({
  latitude: s.int(),
  longitude: s.int(),
  positionConfidenceEllipse: posConfidenceEllipseSchema,
  altitude: altitudeSchema,
});
