import {UserRepository} from "@/core/auth/hexagon/gateways/user.repository";
import {AuthGateway} from "@/core/auth/hexagon/gateways/auth.gateway";

export const createLoginUseCase = (userRepository: UserRepository, authGateway: AuthGateway) => async (email: string, password: string) => {
    const userFound = await userRepository.getByEmail(email);

    if(!userFound) {
        throw new Error('User not found');
    }

    const isPasswordValid = userFound.password === password;

    if(!isPasswordValid) {
        throw new Error('Invalid password');
    }

    await authGateway.login(userFound);
}