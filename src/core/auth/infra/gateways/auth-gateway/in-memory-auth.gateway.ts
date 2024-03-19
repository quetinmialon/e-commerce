import {AuthGateway} from "@/core/auth/hexagon/gateways/auth.gateway";
import {User} from "@/core/auth/hexagon/gateways/user.repository";


export class InMemoryAuthGateway implements AuthGateway {
    private currentUser: User | undefined;
    async login(user: User): Promise<void> {
        this.currentUser = user;
    }

    async getCurrentUser(): Promise<User | undefined> {
        return this.currentUser;
    }
}