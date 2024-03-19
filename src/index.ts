import {InMemoryUserRepository} from "@/core/auth/infra/gateways/user-repository/in-memory-user.repository";
import {InMemoryAuthGateway} from "@/core/auth/infra/gateways/auth-gateway/in-memory-auth.gateway";
import {createLoginUseCase} from "@/core/auth/hexagon/usecases/create-login.usecase";

const userRepository = new InMemoryUserRepository();
userRepository.givenUsers([{
    email: 'maxime@gmail.com',
    password: "Le mot de passe"
}])
const authGateway = new InMemoryAuthGateway();
export const loginUseCase = createLoginUseCase(userRepository, authGateway);