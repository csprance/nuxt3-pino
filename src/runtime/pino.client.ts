import { defineNuxtPlugin } from "nuxt/app";
import pino from "pino";

export default defineNuxtPlugin((nuxtApp) => {
  const { client } = nuxtApp.$config.public.nuxt3Pino;
  const logger = pino({
      transport: {
        targets: [{
          target: "pino-pretty",
          level: client.level, options: {}
        }]
      },
      level:  client.level,
      timestamp: pino.stdTimeFunctions.isoTime
    }
  );
  logger.level =  client.level;

  return {
    provide: {
      logger
    }
  };
});
