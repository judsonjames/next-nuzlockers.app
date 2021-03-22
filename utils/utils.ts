/**
 *General Purpose Hash map for type safety
 */
export interface Hash<T> {
  [key: string]: T;
}
