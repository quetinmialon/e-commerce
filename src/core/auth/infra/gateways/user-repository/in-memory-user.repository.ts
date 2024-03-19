import {User, UserRepository} from "@/core/auth/hexagon/gateways/user.repository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];
    async getByEmail(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    givenUsers(users: User[]) {
        this.users = users;
    }
}