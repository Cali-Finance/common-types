import { IUserSettings } from '../common/IUserSettings';
/**
 * Default User structure
 *
 * @property {number} id
 * @property {string} wallet
 * @property {string} picture
 * @property {string} name
 * @property {IUserSettings} settings
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface IUser {
  id?: number;
  wallet?: string;
  picture?: string;
  name?: string;
  /**
   * user settings
   */
  settings?: IUserSettings;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  email?: string;
}

export interface GetCompanyUsersRes extends IUser {
  revenue?: number;
  asset?: string;
  status?: number;
}
