import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

// array com os models da aplicação
const models = [User, File];

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
        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
