import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The EUI64 address of the device being removed */
export type DtoOffBoardSensor = {
  /**
   * the IEEE EUI64 address space used to identify a device. It is supplied by the device
   * manufacturer
   */
  deveui?: string;
};

export const dtoOffBoardSensorSchema: Schema<DtoOffBoardSensor> = s.object<DtoOffBoardSensor>({
  deveui: s.optional(s.string()),
});
