import { jwtMiddleware } from '../api/jwt-middleware';
import { errorHandler } from '../api/error-handler';

export { apiHandler };

function apiHandler(handler) {
  return async (req, res) => {
    try {
      // global middleware
      await jwtMiddleware(req, res);

      // route handler
      await handler(req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
}
