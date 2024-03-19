export interface ICreateUserDto {
  auth0Id: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}