import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export let routerApp = [
    {
        path:"/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]