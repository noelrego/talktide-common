export type GenericResponseType = {
    statusCode: number;
    message: string | null;
    resData?: {[key: string]: any} | null;
    errors?: string | null;
}