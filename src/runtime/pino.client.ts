import pino from "pino";

export default defineNuxtPlugin((nuxtApp) => {
  const { client } = nuxtApp.$config.public.nuxt3Pino;
  const logger = pino({
      transport: {
        targets: [{
          target: "pino-pretty",
          level: "trace"
        }]
      },
      level: "trace",
      timestamp: pino.stdTimeFunctions.isoTime
    }
  );
  logger.level = "trace";

  return {
    provide: {
      logger
    }
  };
});
