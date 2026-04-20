import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export let appRouter = [
    {
        path:"/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]