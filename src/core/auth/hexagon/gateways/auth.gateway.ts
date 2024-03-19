import {User} from "@/core/auth/hexagon/gateways/user.repository";

export interface AuthGateway {
    login(user: User): Promise<void>;
    getCurrentUser(): Promise<User | undefined>;
}