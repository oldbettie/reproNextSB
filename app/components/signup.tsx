import { login, signup } from "@/app/actions/user"

export function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input className="text-black" id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input className="text-black" id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    )
}


