import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./shared/layouts/DefaultLayout";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { CardCollection } from "./pages/CardCollection";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/collection" element={<CardCollection />} />
            </Route>
        </Routes>
    )
}