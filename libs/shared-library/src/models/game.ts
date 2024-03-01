import { IBaseModel } from "./baseModel";

export interface IGame extends IBaseModel {
  name: string;
  description: string;
}