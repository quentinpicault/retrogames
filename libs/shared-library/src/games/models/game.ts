import { IBaseModel } from "../../common/models/baseModel";

export interface IGame extends IBaseModel {
  name: string;
  description: string;
}