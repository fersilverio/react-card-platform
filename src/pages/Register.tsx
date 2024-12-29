import { InputField } from "../shared/components/InputField";
import { IconMap } from "../shared/icon-mapping.enum";

export function Register() {
    return(
        <>
            <section>
                <label htmlFor="modal-1">
                    <div className="form-field">
                        <div className="form-control justify-center">
                            <a className="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a>
                        </div>
                    </div>
                </label>

                <article>
                    <input className="modal-state" id="modal-1" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-1"></label>

                        <div className="modal-content bg-gradient-to-bl from-gray-login-area-500 to-gray-login-area-900 flex w-full flex-col gap-10 p-7">
                            <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-center text-2xl font-semibold">Cadastrar</h2>
                            </div>

                            <section>
                                <div className="form-group">
                                    <div className="form-control relative w-full">
                                        <InputField 
                                            placeholder="Entrar com o nome do usuário"
                                            iconClass={IconMap.USER}
                                        />
                                    </div>
                                    
                                    <div className="form-control relative w-full">
                                        <InputField 
                                            type="email" 
                                            placeholder="Enter email"
                                            iconClass={IconMap.PASSWORD}
                                        />
                                    </div>

                                    <div className="form-control relative w-full">
                                        <InputField 
                                            placeholder="Entrar com o nickname do usuário"
                                            iconClass={IconMap.USER}
                                        />
                                    </div>
                            
                                    <div className="form-control relative w-full">
                                        <InputField 
                                            type="password" 
                                            placeholder="Enter password"
                                            iconClass={IconMap.PASSWORD}
                                        />
                                    </div>

                                    <button className="text-gray-100 text-md rounded-md bg-gradient-to-tr from-blue-900 to-blue-300 w-full shadow-sm shadow-blue-600 pt-2 pb-2 align-middle">Cadastrar</button>

                                </div>
                            </section>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}