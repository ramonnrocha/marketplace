import { User } from "../user";

export interface RegisterHttpParams {
    name: String,
    email: String,
    avatarUrl?: String,
    phone: String,
    password: String

}

export interface RegisterHttpResponse {
    token: string,
    refreshToken: string,
    user: User,
}