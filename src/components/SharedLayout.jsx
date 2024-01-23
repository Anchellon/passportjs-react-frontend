import { Outlet } from "react-router-dom";
import FixedNavbar from "./FixedNavbar";

export default function SharedLayout() {
    return (
        <>
            <FixedNavbar />
            <div className="px-5 py-4">
                <Outlet />
            </div>
        </>
    );
}
