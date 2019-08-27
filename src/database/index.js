import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

// array com os models da aplicação
const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {

        /**
         * cria a conexao com o banco
         * passando as configurações definidas no arquivo config/database.js
         */
        this.connection = new Sequelize(databaseConfig);

        // passando a conexao para todos os models da aplicação
        models.map(model => model.init(this.connection));
    }
}

export default new Database();
