import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Road Side Alert (RSA) message payload as defined in SAE J2735. */
export type SaeAlertPayload = {
  /**
   * It is used to provide a sequence number within a stream of messages with the same DSRCmsgID
   * (here RoadSideAlert) and from the same sender.
   *
   * @default 0
   */
  msgCnt?: number;
  /**
   * The ITIS Code that describes the alert/danger/hazard. All ITS standards use the same types here
   * to explain the type of the alert/danger/hazard involved.
   *
   * The complete set of ITIS codes can be found in Volume Two of the SAE J2540 standard. This is a
   * set of over 1000 items which are used to encode common events and list items in ITS.
   */
  typeEvent: number;
  /**
   * ITIS code set entries to further describe the event, give advice, or any other ITIS codes
   * related to the event/danger/hazard.
   */
  description?: number[];
};

export const saeAlertPayloadSchema: Schema<SaeAlertPayload> = s.object<SaeAlertPayload>({
  msgCnt: s.defaulted(s.int(), 0),
  typeEvent: s.int(),
  description: s.optional(s.array(s.int())),
});
