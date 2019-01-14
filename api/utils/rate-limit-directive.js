// @flow
import { createRateLimitDirective, RedisStore } from 'graphql-rate-limit';
import { getClientIp } from 'request-ip';
import createRedis from 'shared/bull/create-redis';

export default createRateLimitDirective({
  identifyContext: ctx => (ctx.user && ctx.user.id) || getClientIp(ctx.request),
  store: new RedisStore(createRedis()),
});
