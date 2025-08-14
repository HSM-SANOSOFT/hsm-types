import { Metadata } from "./metadata";
import { Pagination } from "./pagination";

export type SuccessResponse<T> = {
  meta: Metadata;
  pagination?: Pagination;
  data: T;
};
