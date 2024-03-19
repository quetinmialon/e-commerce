export type User = {
    email: string;
    password: string;
}

export interface UserRepository {
    getByEmail(email: string): Promise<User | undefined>;
}