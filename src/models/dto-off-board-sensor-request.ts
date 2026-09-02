import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensorinsightsconfigSchema, type Sensorinsightsconfig } from "./sensorinsightsconfig.js";

export type DtoOffBoardSensorRequest = {
  accountname?: string;
  configuration?: Sensorinsightsconfig;
};

export const dtoOffBoardSensorRequestSchema: Schema<DtoOffBoardSensorRequest> =
  s.object<DtoOffBoardSensorRequest>({
    accountname: s.optional(s.string()),
    configuration: s.optional(s.lazy(() => sensorinsightsconfigSchema)),
  });
