export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
}

export interface JwtPayload {
  userId: number;
}
