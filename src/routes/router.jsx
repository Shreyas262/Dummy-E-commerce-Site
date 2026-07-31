import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import Cart from '../pages/cart/Cart'
import Wishlist from '../pages/wishlist/Wishlist'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import NotFound from '../pages/not_found/NotFound'
import ProductDetails from '../pages/products/ProductDetails'
import Checkout from '../pages/checkout/Checkout'
import Profile from '../pages/profile/Profile';
import ProtectedRoute from './ProtectedRoute';

// Creating the router
const router = createBrowserRouter([
    {   
        // index/home path in app layout and the nested paths within
        path: "/",
        Component: AppLayout,
        children: [
            { index: true, Component: Home },
            { path: "products", Component: Products},
            { path: "products/:id", Component: ProductDetails },
            {
                path: "cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                )
            },
            {
                path: "wishlist",
                element: (
                    <ProtectedRoute>
                        <Wishlist />
                    </ProtectedRoute>
                )
            },
            {
                path: "checkout",
                element: (
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                )
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },
            // {
            //     path: "orders",
            //     element: (
            //         <ProtectedRoute>
            //             <Orders />
            //         </ProtectedRoute>
            //     )
            // }
        ]
    },
    {
        // paths for authentication pages
        path: "auth",
        Component: AuthLayout,
        children: [
            { path: "login", index: true, Component: Login },
            { path: "register", Component: Register },
        ]
    },
    {
        // if any given path not found
        path: "*",
        Component: NotFound,
    }
])

export default router
