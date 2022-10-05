import { IUser } from "./IUser";

export interface INonce {
  _id?: String;
  nonce: String;
  wallet: String;
  expired_at: Date;
  isUsed: Boolean;
}
