import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AggregateSessionReportRequest = {
  accountNumber: string;
  startDate?: string;
  endDate?: string;
  imei: string[];
  deviceGroup?: string;
  dataPlan?: string;
  noSessionFlag?: boolean;
};

export const aggregateSessionReportRequestSchema: Schema<AggregateSessionReportRequest> =
  s.object<AggregateSessionReportRequest>({
    accountNumber: s.string(),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    imei: s.array(s.string()),
    deviceGroup: s.optional(s.string()),
    dataPlan: s.optional(s.string()),
    noSessionFlag: s.optional(s.boolean()),
  });
