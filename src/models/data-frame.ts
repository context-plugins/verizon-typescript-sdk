import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFrictionInfoSchema, type ContentFrictionInfo } from "./content-friction-info.js";
import { frameTypeSchema, type FrameType } from "./frame-type.js";
import { geographicalPathSchema, type GeographicalPath } from "./geographical-path.js";
import { contentSchema, type Content } from "./unions/content.js";
import { msgIdSchema, type MsgId } from "./unions/msg-id.js";

/**
 * The data frame allows sending various advisory and road sign types of information to equipped
 * devices.
 */
export type DataFrame = {
  /**
   * Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.
   *
   * @default 0
   */
  doNotUse1?: number;
  /**
   * The frameType data element provides the type of message to follow in the rest of the message
   * frame structure. The following frame types are supported:
   *  - unknown
   *  - advisory
   *  - roadSignage
   *  - commercialSignage
   */
  frameType: FrameType;
  msgId: MsgId;
  /**
   * The V2X year consists of integer values from zero to 4095 representing the year according to
   * the Gregorian calendar date system. The value of zero shall represent an unknown value.
   */
  startYear?: number;
  /**
   * Start time expresses the number of elapsed minutes of the current year in the time system being
   * used (typically UTC time). The value 527040 shall be used for invalid.
   */
  startTime: number;
  /**
   * The duration, in units of whole minutes, that a object persists for. A value of 32000 means
   * that the object persists forever. The range 0..32000 provides for about 22.2 days of maximum
   * duration.
   */
  durationTime: number;
  /**
   * The relative importance of the sign, on a scale from zero (least important) to seven (most
   * important).
   */
  priority: number;
  /**
   * Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.
   *
   * @default 0
   */
  doNotUse2?: number;
  /**
   * The data frame is used to support the cross-cutting need in many V2X messages to describe
   * arbitrary spatial areas (polygons, boundary lines, and other basic shapes) required by various
   * message types in a small message size. This data frame can describe a complex path or region of
   * arbitrary size using either one of the two supported node offset methods (XY offsets or LL
   * offsets) or using simple geometric projections.
   */
  regions: GeographicalPath[];
  /**
   * Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.
   *
   * @default 0
   */
  doNotUse3?: number;
  /**
   * Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.
   *
   * @default 0
   */
  doNotUse4?: number;
  content: Content;
  /**
   * It contains information that extends the original traveler data frame to enable addition of
   * future entities. Friction information is the first entity included in the new part three
   * content.
   */
  contentNew?: ContentFrictionInfo;
};

export const dataFrameSchema: Schema<DataFrame> = s.object<DataFrame>({
  doNotUse1: s.defaulted(s.int(), 0),
  frameType: frameTypeSchema,
  msgId: msgIdSchema,
  startYear: s.optional(s.int()),
  startTime: s.int(),
  durationTime: s.int(),
  priority: s.int(),
  doNotUse2: s.defaulted(s.int(), 0),
  regions: s.array(s.lazy(() => geographicalPathSchema)),
  doNotUse3: s.defaulted(s.int(), 0),
  doNotUse4: s.defaulted(s.int(), 0),
  content: contentSchema,
  contentNew: s.optional(s.lazy(() => contentFrictionInfoSchema)),
});
