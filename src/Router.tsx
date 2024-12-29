import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./shared/layouts/DefaultLayout";
import { Profile } from "./pages/Profile";
import { CardCollection } from "./pages/CardCollection";
import { FriendCollection } from "./pages/FriendCollection";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/profile" element={<Profile />} />
                <Route path="/collection" element={<CardCollection />} />
                <Route path="/friends" element={<FriendCollection />}/>
            </Route>
        </Routes>
    )
}