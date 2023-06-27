import dotenv from "dotenv";
import { FatalError } from "./errors";

// This file is used to initialize the environment variables

export interface IEnv {
  debug: boolean;
  trustProxy: boolean;
  apiAccessKey: string;
}

let _env: IEnv | undefined = undefined;

export function initEnv(): IEnv {
  dotenv.config();

  _env = {
    debug: Boolean(process.env.DEBUG) || true,
    trustProxy: Boolean(process.env.PROXY) || false,
    apiAccessKey: process.env.API_ACCESS_KEY || "",
  };

  if (_env.debug) {
    console.log("[info] DEBUG ENABLED");
  }

  if (_env.trustProxy) {
    console.log("[info] PROXY ENABLED");
  }

  return _env;
}

export default function env(): IEnv {
  if (!_env) {
    throw new FatalError("[error] Environment Variables are not initialized!");
  }
  return _env;
}

export const ENV = {};
