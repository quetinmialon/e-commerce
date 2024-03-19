

import {loginUseCase} from "@/index";

export const loginAction = async (formData: FormData) => {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await loginUseCase(email, password)
}