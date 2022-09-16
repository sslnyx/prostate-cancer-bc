const base = new URL(`${window.location.protocol}//${window.location.host}`);

function isInternal(url) {
    const hostname = new URL(url, base).hostname
    return hostname === base.hostname || hostname === "preview.prostatecancerbc.ca" || hostname === "staging.prostatecancerbc.ca";
}

function removeBaseUrl(url) {
    return new URL(url, base).hostname ? new URL(url, base).pathname : url;
}

function cleanText(strInputCode) {
    return strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
}

const toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

export { isInternal, toSnakeCase, cleanText, removeBaseUrl }