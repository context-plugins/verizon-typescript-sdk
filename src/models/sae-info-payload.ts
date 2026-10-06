import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataFrameSchema, type DataFrame } from "./data-frame.js";

/** Traveler Information Message (TIM) payload as defined in SAE J2735. */
export type SaeInfoPayload = {
  /**
   * It is used to provide a sequence number within a stream of messages with the same DSRCmsgID
   * (here RoadSideAlert) and from the same sender.
   *
   * @default 0
   */
  msgCnt?: number;
  /**
   * The number of elapsed minutes of the current year in the time system being used (typically UTC
   * time). -- the value 527040 shall be used for invalid
   */
  timeStamp?: number;
  /**
   * Provides a relatively unique value which can be used to connect to (link to) other supporting
   * messages in other formats.
   *
   * The value is described as a 18-character hexadecimal string.
   */
  packetId?: string;
  /**
   * A valid internet style URI/URL in the form of a text string which will form the base of a
   * compound string which, when combined with the URL-short data element, will link to the
   * designated resource.
   */
  urlB?: string;
  /** List of data frames. */
  dataFrames: DataFrame[];
};

export const saeInfoPayloadSchema: Schema<SaeInfoPayload> = s.object<SaeInfoPayload>({
  msgCnt: s.defaulted(s.int(), 0),
  timeStamp: s.optional(s.int()),
  packetId: s.optional(s.string()),
  urlB: s.optional(s.string()),
  dataFrames: s.array(s.lazy(() => dataFrameSchema)),
  _keysMap: {
    packetId: "packetID",
  },
});
