import { IBaseModel } from "./common/models/baseModel";

import { IUser } from "./users/models/user";
import { IValidateUserDto } from "./users/dto/validateUserDto";
import { ICreateUserDto } from "./users/dto/createUserDto";

import { IGame } from "./games/models/game";

import { GenericEntity } from "./typeorm/genericEntity";

export {
  IBaseModel,

  IUser,
  IValidateUserDto,
  ICreateUserDto,

  IGame,

  GenericEntity,
}