import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Select which V2X messaging standard will be used for the message generation. The following
 * options are supported:
 *   - "etsi": The message will be generated using the ETSI (European) standard (e.g. DENM).
 *   - "sae": The message will be generated using the SAE J2735 (North American) standard (e.g. RSA,
 *     TIM).
 *   - if not sent while POST, defaults to "sae"
 *   - mandatory to send "etsi" standard here, if ETSI messages are being sent in config
 */
export const MessageStandard = {
  Etsi: "etsi",
  Sae: "sae",
} as const;
export type MessageStandard = (typeof MessageStandard)[keyof typeof MessageStandard] | (string & {});

export const messageStandardSchema: EnumSchema<MessageStandard> = s.enumOf<MessageStandard>(MessageStandard);
