import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roadSignIdSchema, type RoadSignId } from "./road-sign-id.js";

/** Message ID referencing a road sign location. */
export type RoadSignMsgId = {
  /** It provide a precise location of one or more roadside signs. */
  roadSignId: RoadSignId;
};

export const roadSignMsgIdSchema: Schema<RoadSignMsgId> = s.object<RoadSignMsgId>({
  roadSignId: roadSignIdSchema,
  _keysMap: {
    roadSignId: "roadSignID",
  },
});
