import { defineNuxtPlugin } from "nuxt/app";
import pino from "pino";

export default defineNuxtPlugin((nuxtApp) => {
  const { server } = nuxtApp.$config.public.nuxt3Pino;
  const transport = pino.transport({
    targets: [
      {
        target: "pino-pretty",
        level: "trace", options: {}
      },
      {
        target: "pino/file",
        options: { destination: `./app.log` },
        level: "trace"
      }
    ]
  });
  const logger = pino({
      level: server.level,
      timestamp: pino.stdTimeFunctions.isoTime
    },
    transport
  );
  logger.level =  server.level;

  return {
    provide: {
      logger
    }
  };
});
