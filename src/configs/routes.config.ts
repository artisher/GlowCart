import { lazy, type JSX } from 'react'

export type AppRoute = {
    key: string
    path: string
    component: React.LazyExoticComponent<() => JSX.Element>
    children?: AppRoute[]
}

export const publicRoutes = [
    {
        key: 'login',
        path: '/login',
        component: lazy(() => import("../Pages/Login/Login")),
    },
    {
        key: 'home',
        path: '/',
        component: lazy(() => import("../Pages/Home/Home")),
    },
    {
        key: 'about',
        path: '/about-us',
        component: lazy(() => import("../Pages/AboutUs/AboutUs")),
    },
    {
        key: 'contact',
        path: '/contact-us',
        component: lazy(() => import("../Pages/ContactUs/ContactUs")),
    },
    {
        key: 'categories',
        path: '/categories',
        component: lazy(() => import("../Pages/Categories/Categories")),
    },
    {
        key: 'shop',
        path: '/shop',
        component: lazy(() => import("../Pages/Shop/Shop")),
    },
    {
        key: 'cart',
        path: '/cart',
        component: lazy(() => import("../Pages/Cart/Cart")),
    },
    {
        key: 'faq',
        path: '/faq',
        component: lazy(() => import("../Pages/Faq/Faq")),
    },
    {
        key: 'PrivacyPolicy',
        path: '/Privacy-Policy',
        component: lazy(() => import("../Pages/PrivacyPolicy/PrivacyPolicy")),
    },
    {
        key: 'ReturnsRefunds',
        path: '/Returns-Refunds',
        component: lazy(() => import("../Pages/ReturnsRefunds/ReturnsRefunds")),
    },
    {
        key: 'TermsOfService',
        path: '/Terms-Of-Service',
        component: lazy(() => import("../Pages/TermsOfService/TermsOfService")),
    },
    {
        key: 'product',
        path: '/product/:id',
        component: lazy(() => import("../Pages/Product/ProductDetail"))
    },
    //admin
    {
        key: 'admin',
        path: '/admin',
        component: lazy(() => import("../Pages/AdminPanel/AdminPanel"))
    },

]
