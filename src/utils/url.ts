
var hasBase = import.meta.env.BASE_URL != "/";

export function getURL(URL: string) {
    if (URL.endsWith('/')) {
        URL = URL.slice(0, -1);
    }
    if (hasBase) {
        if (URL.startsWith('/') || URL.length == 0) {
            return `${import.meta.env.BASE_URL}${URL}`;
        } else {
            return `${import.meta.env.BASE_URL}/${URL}`;
        }
    } else {
        return URL;
    }
}