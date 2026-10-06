import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EtxExpectedTypeEnum, etxExpectedTypeEnumSchema } from "./etx-expected-type-enum.js";
import { EtxMessageStandardEnum, etxMessageStandardEnumSchema } from "./etx-message-standard-enum.js";
import { regionIntersectionPairSchema, type RegionIntersectionPair } from "./region-intersection-pair.js";

/** Query MAP records using specific region and intersection identifier pairs */
export type EtxMapMessageIntersectionCoordinates = {
  /**
   * V2X messaging standard selection. Accepted values are 'sae' (SAE J2735) and 'etsi' (ETSI TS 103
   * 301).
   *
   * @default EtxMessageStandardEnum.Sae
   */
  messageStandard?: EtxMessageStandardEnum;
  /** List of region and intersection ID pairs to retrieve MAP messages for. */
  regionIntersectionPairs: RegionIntersectionPair[];
  /** The format of the payload in the response body. @default EtxExpectedTypeEnum.Base64 */
  expectedType?: EtxExpectedTypeEnum;
  /** Base64 encoded token used to retrieve the next page of results */
  pageToken?: string;
  /** Maximum number of records to return in a single page @default 200 */
  pageSize?: number;
};

export const etxMapMessageIntersectionCoordinatesSchema: Schema<EtxMapMessageIntersectionCoordinates> =
  s.object<EtxMapMessageIntersectionCoordinates>({
    messageStandard: s.defaulted(etxMessageStandardEnumSchema, EtxMessageStandardEnum.Sae),
    regionIntersectionPairs: s.array(s.lazy(() => regionIntersectionPairSchema)),
    expectedType: s.defaulted(etxExpectedTypeEnumSchema, EtxExpectedTypeEnum.Base64),
    pageToken: s.optional(s.string()),
    pageSize: s.defaulted(s.int(), 200),
  });
