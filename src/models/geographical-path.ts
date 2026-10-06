import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  geographicalPathDescriptionSchema,
  type GeographicalPathDescription,
} from "./geographical-path-description.js";

/**
 * The data frame is used to support the cross-cutting need in many V2X messages to describe
 * arbitrary spatial areas (polygons, boundary lines, and other basic shapes) required by various
 * message types in a small message size.
 */
export type GeographicalPath = {
  /**
   * This data frame can describe a complex path of arbitrary size using node offset method (LL
   * offsets).
   */
  description?: GeographicalPathDescription;
  /**
   * OctetStrings are described as hexadecimal strings, where each octet is represented by two
   * hexadecimal characters.
   */
  direction?: string;
};

export const geographicalPathSchema: Schema<GeographicalPath> = s.object<GeographicalPath>({
  description: s.optional(s.lazy(() => geographicalPathDescriptionSchema)),
  direction: s.optional(s.string()),
});
