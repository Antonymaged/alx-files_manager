import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.connected = true;
    this.client.on('error', (err) => {
      console.error(err);
      this.isClientConnected = false;
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

  isAlive() {
    return this.connected;
  }

  async get(key) {
    const val = await this.client.get(key);
    return val
  }

  async set(key, value, duration) {
    setTimeout(() => {this.client.set(key, value), duration});
  }

  async del(key) {
    await this.client.del(key);
  }

}

const redisClient = new RedisClient();
export default redisClient;
