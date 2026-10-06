import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

/** Indicates the surface of the roadway is asphalt or tar. */
export type AsphaltOrTar = {
  /** Indicates the type of asphalt or tar. */
  type?: Type7;
};

export const asphaltOrTarSchema: Schema<AsphaltOrTar> = s.object<AsphaltOrTar>({
  type: s.optional(s.lazy(() => type7Schema)),
});
