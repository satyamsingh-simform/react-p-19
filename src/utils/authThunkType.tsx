export type User={
  "id":number,
  "username":string,
  "email":string,
  "firstName":string,
  "lastName":string,
  "gender":string,
  "image":string,
  "accessToken":string, // JWT accessToken (for backward compatibility) in response and cookies
  "refreshToken":string // refreshToken in response and cookies
}

export type InitialState={
    user:User|null,
    isAuthenticated:boolean,
    loading:boolean,
    error:string|null,
}

export type LoginCredentials={
    username:string;
    password:string;
}