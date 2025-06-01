export function getURL(url: string): string {
    const base = import.meta.env.BASE_URL;

    // Ensure exactly one leading slash, and no trailing slash
    url = '/' + url.replace(/^\/+/, '').replace(/\/+$/, '');

    return base !== '/' ? `${base}${url}` : url;
}
