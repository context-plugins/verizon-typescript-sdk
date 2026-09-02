import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EtxMapMessageGeofenceGeometry = {
  Polygon: "Polygon",
} as const;
export type EtxMapMessageGeofenceGeometry =
  | (typeof EtxMapMessageGeofenceGeometry)[keyof typeof EtxMapMessageGeofenceGeometry]
  | (string & {});

export const etxMapMessageGeofenceGeometrySchema: EnumSchema<EtxMapMessageGeofenceGeometry> =
  s.enumOf<EtxMapMessageGeofenceGeometry>(EtxMapMessageGeofenceGeometry);
