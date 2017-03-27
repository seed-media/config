# Configuration Loader/Reader

## Usage

Assuming the following config directory

    config/app.js
    config/database.js
    config/mail.js

All files are loaded from the directory into a configuration object in the
following format `config[filename]`.

Assuming the database.js file in the above example contained the following
object as a the default export

    {
      host: '127.0.0.1',
      user: 'bob'
    }

    const config = new Config([ string path = ./config/ ])

    // Getting variables
    const database = config.get('database') // {...}
    const databaseHost = config.get('database.host') // 127.0.0.1

    // Getting variables with a default
    const databaseUser = config.get('database.user', 'root') // Bob
    const databaseName = config.get('database.name', 'mydatabase') // mydatabase

