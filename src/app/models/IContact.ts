import { IAddress } from './IAddress';

export interface IContact {
  name: string;
  surname: string;
  imageUrl?: string;
  mobile: string;
  email: string;
  address?: IAddress;
}
