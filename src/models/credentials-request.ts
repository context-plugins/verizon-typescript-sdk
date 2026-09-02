import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceCredentialRequestItemSchema,
  type DeviceCredentialRequestItem,
} from "./device-credential-request-item.js";

export type CredentialsRequest = {
  ecpd: string;
  accountNumber: string;
  items: DeviceCredentialRequestItem[];
};

export const credentialsRequestSchema: Schema<CredentialsRequest> = s.object<CredentialsRequest>({
  ecpd: s.string(),
  accountNumber: s.string(),
  items: s.array(s.lazy(() => deviceCredentialRequestItemSchema)),
  _keysMap: {
    ecpd: "ECPD",
  },
});
