import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specific region and intersection identification pair */
export type RegionIntersectionPair = {
  /** The region identifier code (0-65535) @default 0 */
  regionId?: number;
  /** The intersection identifier code (0-65535) */
  intersectionId: number;
};

export const regionIntersectionPairSchema: Schema<RegionIntersectionPair> = s.object<RegionIntersectionPair>({
  regionId: s.defaulted(s.int(), 0),
  intersectionId: s.int(),
});
