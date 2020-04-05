import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  defaultMeta: {
    service: 'timeline-front',
  },
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

// Use MongoDB for logging server side content
if (typeof window === 'undefined') {
  require('winston-mongodb');
  const { defaultMongoConfig: options } = require('utils/mongo');

  logger.add(
    new transports.MongoDB({
      db: 'mongodb://localhost:27018/timeline-logs',
      options,
    }),
  );

  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'production') {
    logger.remove(transports.Console);
  }
}

export default logger;
