import { API_URL } from "@/config";
import { HttpResponse, type ResponseResolver } from "msw";

export type ErrorResolver = (prop: {
  status?: number;
  message?: string;
  code?: number;
}) => ResponseResolver;

export const errorResolver: ErrorResolver =
  ({ status = 500, message = "", code = 0 } = {}) =>
  () =>
    new HttpResponse(
      JSON.stringify({
        message,
        code,
      }),
      {
        status,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

export const backend = (path: string) => `${API_URL}${path}`;
