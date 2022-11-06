import { Json } from 'sequelize/types/utils';
/**
 * Default User structure
 *
 * @property {number} id
 * @property {string} wallet
 * @property {string} picture
 * @property {string} name
 * @property {Json} settings
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface IUser {
  id?: number;
  wallet?: string;
  picture?: string;
  name?: string;
  settings?: Json;
  isAdmin?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
