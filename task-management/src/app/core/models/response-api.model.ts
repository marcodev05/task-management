export interface ResponseApi<T> {
    message: string,
    data: T,
    status: number,
    has_error: boolean
}