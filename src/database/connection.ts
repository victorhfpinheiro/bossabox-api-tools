import knex from 'knex'
import ConfigKnex from './configKnex'

const connection = knex(ConfigKnex.config.development)

export default connection
