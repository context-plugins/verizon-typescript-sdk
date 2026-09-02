import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FurtherInfoMsgId = {
  furtherInfoId: string;
};

export const furtherInfoMsgIdSchema: Schema<FurtherInfoMsgId> = s.object<FurtherInfoMsgId>({
  furtherInfoId: s.string(),
  _keysMap: {
    furtherInfoId: "furtherInfoID",
  },
});
