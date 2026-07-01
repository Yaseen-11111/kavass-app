export const getPath = (path: string) => {
    const isProd = import.meta.env.PROD;
    const prefix = isProd ? '/kavass-app' : '';

    // Ensure the path starts with a slash, then remove any accidental double slashes
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${prefix}${cleanPath}`.replace(/\/+/g, '/').replace(':/', '://');
};