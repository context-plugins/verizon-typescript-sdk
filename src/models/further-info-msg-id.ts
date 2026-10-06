import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Message ID referencing a further information link (ATIS message). */
export type FurtherInfoMsgId = {
  /**
   * Links to ATIS message. A link to any other incident information data that may be available in
   * the normal ATIS incident description or other messages.
   *
   * The value is described as a 4-character hexadecimal string.
   */
  furtherInfoId: string;
};

export const furtherInfoMsgIdSchema: Schema<FurtherInfoMsgId> = s.object<FurtherInfoMsgId>({
  furtherInfoId: s.string(),
  _keysMap: {
    furtherInfoId: "furtherInfoID",
  },
});
