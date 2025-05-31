import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
});

const connectRedis = async () => {
  try {
    await redisClient.set('test_connection', 'connected');
    console.log('Upstash Redis connected successfully');
  } catch (error) {
    console.error('Upstash Redis connection error:', error);
    process.exit(1);
  }
};
export { redisClient, connectRedis };
