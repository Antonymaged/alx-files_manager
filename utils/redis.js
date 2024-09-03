const redis = require('redis');

class RedisClient {
	constructor() {
		this.client = redis.createClient();
		this.connected = true;
		this.client.on('error', (err) => {
			console.log(err);
			this.connected = false;
		});
		this.client.on('connect', () => {
			console.log('connected');
		});
	}

	isAlive() {
		return this.connected;
	}

	async get(key) {
		const val = await this.client.get(key);
		return val;
	}

	async set(key, value, duration) {
		setTimeout(() => {this.client.set(key, value)}, duration);
	}

	async del(key) {
		this.client.del(key);
	}
}

module.export redisClient = new RedisClient();
