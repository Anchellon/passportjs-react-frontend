import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./context/AuthContext";
const user = null;
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="about" element={<About />} /> */}
        </Route>
    )
);
function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
