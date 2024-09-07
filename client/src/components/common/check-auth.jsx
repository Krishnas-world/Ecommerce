import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();

    // Redirect to login if not authenticated and not on login or register
    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return <Navigate to='/auth/login' />;
    }

    // Redirect authenticated users based on role
    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === 'admin') {
            return <Navigate to='/admin/dashboard' />;
        } else {
            return <Navigate to='/shop/home' />;
        }
    }

    // Prevent non-admin users from accessing admin routes
    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to='/unauth' />;
    }

    // Prevent admin users from accessing shop routes
    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to='/admin/dashboard' />;
    }

    // If everything is fine, render the children
    return <>{children}</>;
}

export default CheckAuth;
