import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etxExpectedTypeEnumSchema, type EtxExpectedTypeEnum } from "./etx-expected-type-enum.js";
import { etxMessageStandardEnumSchema, type EtxMessageStandardEnum } from "./etx-message-standard-enum.js";
import { regionIntersectionPairSchema, type RegionIntersectionPair } from "./region-intersection-pair.js";

export type EtxMapMessageIntersectionCoordinates = {
  messageStandard?: EtxMessageStandardEnum;
  regionIntersectionPairs: RegionIntersectionPair[];
  expectedType?: EtxExpectedTypeEnum;
  pageToken?: string;
  pageSize?: number;
};

export const etxMapMessageIntersectionCoordinatesSchema: Schema<EtxMapMessageIntersectionCoordinates> =
  s.object<EtxMapMessageIntersectionCoordinates>({
    messageStandard: s.optional(s.lazy(() => etxMessageStandardEnumSchema)),
    regionIntersectionPairs: s.array(s.lazy(() => regionIntersectionPairSchema)),
    expectedType: s.optional(s.lazy(() => etxExpectedTypeEnumSchema)),
    pageToken: s.optional(s.string()),
    pageSize: s.optional(s.number()),
  });
