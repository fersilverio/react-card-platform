import { NavLink } from "react-router-dom";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <br />

            <NavLink to={"/login"}>login</NavLink>
            <br />
            <NavLink to={"/register"}>register</NavLink>
            <br />
            <NavLink to={"/profile"}>profile</NavLink>
            <br />
            <NavLink to={"/collection"}>collection</NavLink>
        </>
    )
}