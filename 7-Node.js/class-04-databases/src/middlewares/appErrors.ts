import { Request, Response, NextFunction } from "express";

type AppErrors = {
  status: number;
  message: string;
};

export function appErrors(
  error: AppErrors,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware Error - ", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error" });
}
