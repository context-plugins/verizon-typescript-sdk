import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An item object wrapping an ITIS code value. */
export type ItisItemContent = {
  /**
   * The ITIS Code that describes the alert/danger/hazard. All ITS standards use the same types here
   * to explain the type of the alert/danger/hazard involved.
   *
   * The complete set of ITIS codes can be found in Volume Two of the SAE J2540 standard. This is a
   * set of over 1000 items which are used to encode common events and list items in ITS.
   */
  itis: number;
};

export const itisItemContentSchema: Schema<ItisItemContent> = s.object<ItisItemContent>({
  itis: s.int(),
});
