import type {
  DataTag,
  DefaultError,
  DefinedInitialQueryOptions,
  QueryKey,
  UndefinedInitialQueryOptions,
  UseMutationOptions,
} from "@tanstack/vue-query";

export function queryOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: DefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): DefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  queryKey: DataTag<TQueryKey, TQueryFnData, TError>;
};

export function queryOptions<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UndefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): UndefinedInitialQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  queryKey: DataTag<TQueryKey, TQueryFnData, TError>;
};

export function queryOptions(options: unknown) {
  return options;
}

export function mutationOptions<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(options: UseMutationOptions<TData, TError, TVariables, TContext>) {
  return options;
}
