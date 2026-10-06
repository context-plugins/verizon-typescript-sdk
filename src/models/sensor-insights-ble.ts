import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Property objects for Bluetooth Low-Energy (BLE) devices */
export type SensorInsightsBle = {
  /** The data mode the sensor is using */
  dataMode?: number;
  /** The numeric manufacturer ID */
  manufacturerId?: number;
  /** How frequently the device can be scanned */
  maxNumScan?: number;
  /** The minimum signal strength needed for the sensor to transmit (in Decibels or dB) */
  minSigStr?: number;
  /** The ammount of time to monitor the sensor and varies by device */
  monitorPeriod?: number;
  /** Values for the manufacturer and these vary by device */
  moreManufId?: Record<string, unknown>[];
  /** The operation mode */
  opMode?: number;
  /** The ammount of time between sensor readings and reports */
  reportOffset?: number;
  /** The ammount of time between reports */
  reportPeriod?: number;
  /** The report type */
  reportType?: number;
  /** The ammount of time the sensor is queried for data */
  scanDuration?: number;
};

export const sensorInsightsBleSchema: Schema<SensorInsightsBle> = s.object<SensorInsightsBle>({
  dataMode: s.optional(s.int()),
  manufacturerId: s.optional(s.int()),
  maxNumScan: s.optional(s.int()),
  minSigStr: s.optional(s.int()),
  monitorPeriod: s.optional(s.int()),
  moreManufId: s.optional(s.array(s.record(s.string(), s.unknown()))),
  opMode: s.optional(s.int()),
  reportOffset: s.optional(s.int()),
  reportPeriod: s.optional(s.int()),
  reportType: s.optional(s.int()),
  scanDuration: s.optional(s.int()),
});
