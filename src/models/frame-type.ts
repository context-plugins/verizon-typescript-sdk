import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The frameType data element provides the type of message to follow in the rest of the message
 * frame structure. The following frame types are supported:
 *  - unknown
 *  - advisory
 *  - roadSignage
 *  - commercialSignage
 */
export const FrameType = {
  Unknown: "unknown",
  Advisory: "advisory",
  RoadSignage: "roadSignage",
  CommercialSignage: "commercialSignage",
} as const;
export type FrameType = (typeof FrameType)[keyof typeof FrameType] | (string & {});

export const frameTypeSchema: EnumSchema<FrameType> = s.enumOf<FrameType>(FrameType);
