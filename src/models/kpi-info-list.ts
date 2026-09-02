import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kpiInfoSchema, type KpiInfo } from "./kpi-info.js";

export type KpiInfoList = {
  kpiInfoList?: KpiInfo[];
};

export const kpiInfoListSchema: Schema<KpiInfoList> = s.object<KpiInfoList>({
  kpiInfoList: s.optional(s.array(s.lazy(() => kpiInfoSchema))),
  _keysMap: {
    kpiInfoList: "KpiInfoList",
  },
});
