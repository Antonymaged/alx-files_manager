import mongodb from 'mongodb';

const { MongoClient } = mongodb;

class DBClient {
	constructor() {
		this.host = process.env.DB_HOST || 'localhost';
		this.port = process.env.DB_PORT || 27017;
		this.database = process.env.DB_DATABASE || 'files_manager';
		this.uri = `mongodb://${this.host}:${this.port}/${this.database}`;
		this.client = new MongoClient(this.uri, { useUnifiedTopology: true });
		this.client.connect
	}

	isAlive() {
		return this.client.isConnected();
	}
	
	async nbUsers() {
		return this.client.db().collection('users').countDocuments();
	}

	async nbFiles() {
		return this.client.db().collection('files').countDocuments();
	}

}

export const dbClient = new DBClient();
export default dbClient;
