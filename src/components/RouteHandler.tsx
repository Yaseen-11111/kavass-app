import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


interface RouteHandlerProps {
    children?: React.ReactNode;
}
export const RouteHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Look for the '?p=' parameter in the URL
        const searchParams = new URLSearchParams(location.search);
        const redirectPath = searchParams.get('p');

        // If it exists, navigate to that path immediately
        if (redirectPath) {
            navigate(redirectPath, { replace: true });
        }
    }, [location, navigate]);

    return null; // This component renders nothing
};