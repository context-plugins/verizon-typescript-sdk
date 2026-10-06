import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EtxExpectedTypeEnum, etxExpectedTypeEnumSchema } from "./etx-expected-type-enum.js";
import { EtxMessageStandardEnum, etxMessageStandardEnumSchema } from "./etx-message-standard-enum.js";

/** Query MAP records using a GeoJSON polygon to define the spatial area */
export type EtxMapMessageGeoJsonPolygon = {
  /**
   * V2X messaging standard selection. Accepted values are 'sae' (SAE J2735) and 'etsi' (ETSI TS 103
   * 301).
   *
   * @default EtxMessageStandardEnum.Sae
   */
  messageStandard?: EtxMessageStandardEnum;
  /** GeoJSON Polygon defining the area to retrieve MAP messages for. */
  geoJson: Record<string, unknown>;
  /** The format of the payload in the response body. @default EtxExpectedTypeEnum.Base64 */
  expectedType?: EtxExpectedTypeEnum;
  /** Base64 encoded token used to retrieve the next page of results */
  pageToken?: string;
  /** Maximum number of records to return in a single page @default 200 */
  pageSize?: number;
};

export const etxMapMessageGeoJsonPolygonSchema: Schema<EtxMapMessageGeoJsonPolygon> =
  s.object<EtxMapMessageGeoJsonPolygon>({
    messageStandard: s.defaulted(etxMessageStandardEnumSchema, EtxMessageStandardEnum.Sae),
    geoJson: s.record(s.string(), s.unknown()),
    expectedType: s.defaulted(etxExpectedTypeEnumSchema, EtxExpectedTypeEnum.Base64),
    pageToken: s.optional(s.string()),
    pageSize: s.defaulted(s.int(), 200),
  });
