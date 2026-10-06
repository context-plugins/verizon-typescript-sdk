import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roadSignPositionSchema, type RoadSignPosition } from "./road-sign-position.js";

/** It provide a precise location of one or more roadside signs. */
export type RoadSignId = {
  /**
   * Precise location of a road sign in the WGS-84 coordinate system, from which short offsets may
   * be used to create additional data using a flat earth projection centered on this location.
   */
  position: RoadSignPosition;
  /**
   * OctetStrings are described as hexadecimal strings, where each octet is represented by two
   * hexadecimal characters.
   */
  viewAngle: string;
};

export const roadSignIdSchema: Schema<RoadSignId> = s.object<RoadSignId>({
  position: roadSignPositionSchema,
  viewAngle: s.string(),
});
