import {loginAction} from "@/app/login/login-action";

export default async function LoginPage() {
    return (
        <div>
        <h1>Login</h1>
            <form action={loginAction}>
                <label>
                    Email
                    <input className="dark:text-black" name="email"/>
                </label>
                <label>
                    Password
                    <input className="dark:text-black" name="password"/>
                </label>
                <button>Login</button>
            </form>
        </div>
    );
}