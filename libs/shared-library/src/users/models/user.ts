import { IBaseModel } from "../../common/models/baseModel";

export interface IUser extends IBaseModel {
  auth0Id: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}