import { InputField } from "../shared/components/InputField";
import { IconMap } from "../shared/icon-mapping.enum";
import { Register } from "./Register";

export function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-login-area-500">
            <div className=" flex flex-col gap-3 w-full max-w-md p-6 rounded-lg bg-gradient-to-bl from-gray-login-area-500 to-gray-login-area-900 shadow-md">
                <h1 className="text-white text-3xl flex flex-col items-center p-3">Login</h1>

                <div className="form-group">
                    <div className="form-control relative w-full">
                        <InputField 
                            type="text"
                            placeholder="Enter email"
                            iconClass={IconMap.EMAIL}
                        />

                    </div>
                </div>

                <div className="form-group">
                    <div className="form-control relative w-full">
                        <InputField 
                            type="password"
                            placeholder="Enter password"
                            iconClass={IconMap.PASSWORD}
                        />

                    </div>
                </div>

                <div className="form-field">
                    <div className="form-control justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" className="checkbox" />
                            <a href="#">Remember me</a>
                        </div>
                        <label className="form-label">
                            <a className="link link-underline-hover link-primary text-sm">Esqueceu sua senha?</a>
                        </label>
                    </div>
                </div>

                <button className="text-gray-100 text-md rounded-md bg-gradient-to-tr from-purple-900 to-purple-300 w-full shadow-sm shadow-purple-600 pt-2 pb-2">Entrar</button>

                <Register />

            </div>
        </div>
    )
}