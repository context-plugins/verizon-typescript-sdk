import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegionIntersectionPair = {
  regionId?: number;
  intersectionId: number;
};

export const regionIntersectionPairSchema: Schema<RegionIntersectionPair> = s.object<RegionIntersectionPair>({
  regionId: s.optional(s.number()),
  intersectionId: s.number(),
});
