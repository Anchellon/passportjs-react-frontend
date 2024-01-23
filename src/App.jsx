import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
