import { Outlet } from "react-router-dom";
import FixedNavbar from "./FixedNavbar";

export default function SharedLayout() {
    return (
        <>
            <FixedNavbar />
            <Outlet />
        </>
    );
}
