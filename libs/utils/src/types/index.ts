export type Maybe<T> = T | null | undefined;

export type Merge<P, T> = Omit<P, keyof T> & T;
