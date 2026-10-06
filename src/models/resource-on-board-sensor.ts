import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceOnBoardSensor = {
  /**
   * the IEEE EUI64 address space used to identify a device. It is supplied by the device
   * manufacturer
   */
  deveui: string;
  /**
   * global application ID in IEEE EUI64 address space that uniquely identifies the entity able to
   * process the JoinReq frame
   */
  appeui: string;
  /** an encryption key used for messages during every over the air activation */
  appkey: string;
  /**
   * Class of the sensor device. Valid values are Class A (A), Class B (B), and Class C (C). All
   * LoRaWAN devices must implement Class A
   */
  class: string;
  /** The kind of sensor device */
  kind: string;
  description: string;
  name: string;
  /**
   * Name/value pair, where the value is client defined. The purpose is to keep track of current
   * state per device action.
   */
  customdata?: Record<string, Record<string, unknown>>;
};

export const resourceOnBoardSensorSchema: Schema<ResourceOnBoardSensor> = s.object<ResourceOnBoardSensor>({
  deveui: s.string(),
  appeui: s.string(),
  appkey: s.string(),
  class: s.string(),
  kind: s.string(),
  description: s.string(),
  name: s.string(),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
