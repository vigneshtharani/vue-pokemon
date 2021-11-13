export function objectIntoQueryParams(params: any): string {
  return Object.keys(params).map(key => key + '=' + params[key]).join('&');
}
