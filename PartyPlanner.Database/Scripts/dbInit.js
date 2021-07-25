// Get environment variables
const database = _getEnv('DATABASE');
const username = _getEnv('APP_USERNAME');
const password = _getEnv('APP_PASSWORD');

// Set appropriate database
db.getSiblingDB(database);

// Create app user
db.createUser({
	user: username,
    pwd: password,
    roles: [
        {
            role: 'readWrite',
            db: database
        }
    ]
});
