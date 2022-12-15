
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Layout from "./components/layout/Layout"
import About from "./pages/about"
import Contact from "./pages/contact"
import Home from "./pages/home"

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])


const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App