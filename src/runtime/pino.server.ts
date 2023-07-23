import pino from "pino";

export default defineNuxtPlugin((nuxtApp) => {
  const { server } = nuxtApp.$config.public.nuxt3Pino;
  const transport = pino.transport({
    targets: [
      {
        target: "pino-pretty",
        level: "trace"
      },
      {
        target: "pino/file",
        options: { destination: `./app.log` },
        level: "trace"
      }
    ]
  });
  const logger = pino({
      level: "trace",
      timestamp: pino.stdTimeFunctions.isoTime
    },
    transport
  );
  logger.level = "trace";

  return {
    provide: {
      logger
    }
  };
});
