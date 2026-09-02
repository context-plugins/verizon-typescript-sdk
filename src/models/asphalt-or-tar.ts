import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type AsphaltOrTar = {
  type?: Type7;
};

export const asphaltOrTarSchema: Schema<AsphaltOrTar> = s.object<AsphaltOrTar>({
  type: s.optional(s.lazy(() => type7Schema)),
});
