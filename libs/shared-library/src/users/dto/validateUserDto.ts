export interface IValidateUserDto {
  auth0Id: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}