import { Pagination } from "src/app/core/models/pagination";
import { Sorting } from "src/app/core/models/sorting";

export interface TaskSearchRequest {
    keyword?: string;
    pagination?: Pagination
    name?: string
    sorting?: Sorting
}