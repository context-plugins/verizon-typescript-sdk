import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  getWirelessCoverageRequestFwaSchema,
  type GetWirelessCoverageRequestFwa,
} from "../get-wireless-coverage-request-fwa.js";
import {
  getWirelessCoverageRequestSchema,
  type GetWirelessCoverageRequest,
} from "../get-wireless-coverage-request.js";

export type M2MV1IntelligenceWirelessCoverageRequest =
  | GetWirelessCoverageRequest
  | GetWirelessCoverageRequestFwa;

export const m2Mv1IntelligenceWirelessCoverageRequestSchema: Schema<M2MV1IntelligenceWirelessCoverageRequest> =
  s.of<M2MV1IntelligenceWirelessCoverageRequest>(
    s.union([
      s.lazy(() => getWirelessCoverageRequestSchema),
      s.lazy(() => getWirelessCoverageRequestFwaSchema),
    ]),
  );
