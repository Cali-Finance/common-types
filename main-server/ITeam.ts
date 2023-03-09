/**
 * Default Team structure
 *
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} companyId
 * @property {number} teamContractId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface ITeam {
  id?: number;
  name?: string;
  description?: string;
  companyId?: number;
  teamContractId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
