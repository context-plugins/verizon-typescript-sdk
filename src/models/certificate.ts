import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Certificate = {
  certPem: string;
  keyPem: string;
  caPem: string;
  expirationTime: Date;
};

export const certificateSchema: Schema<Certificate> = s.object<Certificate>({
  certPem: s.string(),
  keyPem: s.string(),
  caPem: s.string(),
  expirationTime: s.dateTime(),
  _keysMap: {
    certPem: "cert.pem",
    keyPem: "key.pem",
    caPem: "ca.pem",
    expirationTime: "ExpirationTime",
  },
});
