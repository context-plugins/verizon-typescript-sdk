import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoOffBoardSensor = {
  deveui?: string;
};

export const dtoOffBoardSensorSchema: Schema<DtoOffBoardSensor> = s.object<DtoOffBoardSensor>({
  deveui: s.optional(s.string()),
});
