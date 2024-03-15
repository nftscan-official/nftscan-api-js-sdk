export function isEmpty(value: unknown): value is undefined | null {
  if (value === undefined || value == null || value === 'null' || value === 'undefined') {
    return true;
  }

  if (typeof value === 'number' || typeof value === 'function') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  if (typeof value === 'string') {
    return value.length === 0;
  }

  return false;
}

export function isJson(str: string): boolean {
  if (!str) {
    return false;
  }

  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
