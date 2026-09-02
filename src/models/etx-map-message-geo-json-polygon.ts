import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etxExpectedTypeEnumSchema, type EtxExpectedTypeEnum } from "./etx-expected-type-enum.js";
import { etxMessageStandardEnumSchema, type EtxMessageStandardEnum } from "./etx-message-standard-enum.js";

export type EtxMapMessageGeoJsonPolygon = {
  messageStandard?: EtxMessageStandardEnum;
  geoJson: Record<string, unknown>;
  expectedType?: EtxExpectedTypeEnum;
  pageToken?: string;
  pageSize?: number;
};

export const etxMapMessageGeoJsonPolygonSchema: Schema<EtxMapMessageGeoJsonPolygon> =
  s.object<EtxMapMessageGeoJsonPolygon>({
    messageStandard: s.optional(s.lazy(() => etxMessageStandardEnumSchema)),
    geoJson: s.record(s.string(), s.unknown()),
    expectedType: s.optional(s.lazy(() => etxExpectedTypeEnumSchema)),
    pageToken: s.optional(s.string()),
    pageSize: s.optional(s.number()),
  });
