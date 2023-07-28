export interface ISocialMedia {
  name: string;
  url?: string;
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
 * @property {ISocialMedia[]} socialMedia
 * @property {number} network
 * @property {string} description
 * @property {string} type
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
export interface ICompany {
  id?: number;
  isAdmin?: boolean;
  wallet?: string;
  name?: string;
  contactEmail?: string;
  isPublic?: boolean;
  color?: string;
  logo?: string;
  contract?: string;
  createdAt?: Date;
  updatedAt?: Date;
  socialMedia?: ISocialMedia[];
  network?: number;
  type?: string;
  description?: string;
  totalFundsUsd?: number;
  checksum?: string;
  tokenDecimals?: number;
  token?: string;
}

export interface GetUserCompaniesRes extends ICompany {
  revenue?: number;
  asset?: string;
  total_members: number;
  contract: `0x${string}`;
}
