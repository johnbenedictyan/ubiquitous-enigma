export default {
  nodeEnv: process.env.NODE_ENV ?? "",
  port: process.env.PORT ?? "",
} as const;
