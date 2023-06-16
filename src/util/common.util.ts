export function isEmpty(obj: unknown): boolean {
  if (typeof obj === 'number') {
    return false;
  }

  if (obj === undefined || obj == null || obj === 'null' || obj === 'undefined') {
    return true;
  }

  const contentStr = typeof obj === 'string' ? obj : JSON.stringify(obj);
  return contentStr.length === 0 || contentStr === '{}' || contentStr === '[]';
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

export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout'));
      }, ms);
    }),
  ]);
}

export function isNodeEnvironment(): boolean {
  return typeof process !== 'undefined' && process != null && process.versions != null && process.versions.node != null;
}
