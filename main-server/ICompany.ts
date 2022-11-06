export interface ISocialMedia {
  name: string;
  url: string;
}
/**
 * Default Company structure
 *
 * @property {number} id
 * @property {string} wallet
 * @property {string} name
 * @property {string} contactEmail
 * @property {boolean} isPublic
 * @property {string} color
 * @property {string} logo
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface ICompany {
  id?: number;
  wallet?: string;
  name?: string;
  contactEmail?: string;
  isPublic?: boolean;
  color?: string;
  logo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  socialMedia?: ISocialMedia[];
}
