/**
 * Default Group structure
 *
 * @property {number} id
 * @property {number} companyId
 * @property {string} name
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface IGroup {
  id?: number;
  companyId?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
