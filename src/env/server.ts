import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    token: z.string().min(72).max(72),
    client_id:z.string().min(19).max(19),
    role:z.string(),
    sudo_role:z.string()
  },
  runtimeEnv: process.env,
});