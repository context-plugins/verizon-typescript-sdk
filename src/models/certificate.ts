import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Structure for the credentials required to connect to the ETX MQTT Message Exchange. */
export type Certificate = {
  /** The string containing the certificate */
  certPem: string;
  /** The string containing the private key */
  keyPem: string;
  /** The string containing the CA certificate */
  caPem: string;
  /** The string describing the expiration timestamp of the certificate */
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
