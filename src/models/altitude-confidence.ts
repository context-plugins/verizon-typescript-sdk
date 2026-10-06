import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Absolute accuracy of a reported altitude value. The value shall be set to:
 * - 0 - `alt-000-01` - if the confidence value is equal to or less than 0,01 metre,
 * - 1 - `alt-000-02` - if the confidence value is equal to or less than 0,02 metre and greater than
 *   0,01 metre,
 * - 2 - `alt-000-05` - if the confidence value is equal to or less than 0,05 metre and greater than
 *   0,02 metre,
 * - 3 - `alt-000-10` - if the confidence value is equal to or less than 0,1 metre and greater than
 *   0,05 metre,
 * - 4 - `alt-000-20` - if the confidence value is equal to or less than 0,2 metre and greater than
 *   0,1 metre,
 * - 5 - `alt-000-50` - if the confidence value is equal to or less than 0,5 metre and greater than
 *   0,2 metre,
 * - 6 - `alt-001-00` - if the confidence value is equal to or less than 1 metre and greater than
 *   0,5 metre,
 * - 7 - `alt-002-00` - if the confidence value is equal to or less than 2 metres and greater than 1
 *   metre,
 * - 8 - `alt-005-00` - if the confidence value is equal to or less than 5 metres and greater than 2
 *   metres,
 * - 9 - `alt-010-00` - if the confidence value is equal to or less than 10 metres and greater than
 *   5 metres,
 * - 10 - `alt-020-00` - if the confidence value is equal to or less than 20 metres and greater than
 *   10 metres,
 * - 11 - `alt-050-00` - if the confidence value is equal to or less than 50 metres and greater than
 *   20 metres,
 * - 12 - `alt-100-00` - if the confidence value is equal to or less than 100 metres and greater
 *   than 50 metres,
 * - 13 - `alt-200-00` - if the confidence value is equal to or less than 200 metres and greater
 *   than 100 metres,
 * - 14 - `outOfRange` - if the confidence value is out of range, i.e. greater than 200 metres,
 * - 15 - `unavailable` - if the confidence value is unavailable.
 */
export const AltitudeConfidence = {
  Alt00001: "alt-000-01",
  Alt00002: "alt-000-02",
  Alt00005: "alt-000-05",
  Alt00010: "alt-000-10",
  Alt00020: "alt-000-20",
  Alt00050: "alt-000-50",
  Alt00100: "alt-001-00",
  Alt00200: "alt-002-00",
  Alt00500: "alt-005-00",
  Alt01000: "alt-010-00",
  Alt02000: "alt-020-00",
  Alt05000: "alt-050-00",
  Alt10000: "alt-100-00",
  Alt20000: "alt-200-00",
  OutOfRange: "outOfRange",
  Unavailable: "unavailable",
} as const;
export type AltitudeConfidence = (typeof AltitudeConfidence)[keyof typeof AltitudeConfidence] | (string & {});

export const altitudeConfidenceSchema: EnumSchema<AltitudeConfidence> =
  s.enumOf<AltitudeConfidence>(AltitudeConfidence);
