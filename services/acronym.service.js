const models = require('../models');
const BaseService = require('../common/base.service');
const BaseError = require('../common/error');
const stringHelper = require('../common/string.helper');
const messages = require('../common/messages');
const winston = require('winston');

class AcronymService extends BaseService {
  async findAll(params) {
    try {
      const query = this.getPagination(params);
      query.attributes = ['id', 'abbreviation', 'text'];

      if (!stringHelper.isUndefinedOrNullOrEmpty(params.search)) {
        query.where = {
          abbreviation: {
            [models.Sequelize.Op.like]: `%${params.search}%`
          }
        };
      }

      const data = await models.acronym.findAndCountAll(query);
      data.pages = Math.ceil(data.count / query.limit);
      data.from = query.offset/query.limit;

      return data;
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      throw new BaseError("Error", this.getErrors(e));
    }
  }

  async findRandomly(count) {
    try {
      let limit = Number(count);
      if (isNaN(limit)) {
        throw new BaseError(messages.invalid_number, { field: 'count', status: 422 });
      }

      return await models.acronym.findAll({
        attributes: ['id', 'abbreviation', 'text'],
        order: models.sequelize.random(),
        limit: limit,
        offset: 0
      });
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      throw new BaseError("Error", this.getErrors(e));
    }
  }

  async findByAbbrev(abbrev) {
    try {
      return await models.acronym.findAll({
        attributes: ['id', 'abbreviation', 'text'],
        where: { abbreviation: abbrev }
      });
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      throw new BaseError("Error", this.getErrors(e));
    }
  }

  async create(model) {
    const transaction = await models.sequelize.transaction({ autocommit: false });

    try {
      await models.acronym.build(model).validate();
      model = await models.acronym.create(model, { transaction });

      await transaction.commit();

      return model;
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      await transaction.rollback();
      throw new BaseError("Error", this.getErrors(e));
    }
  }

  async update(id, model) {
    const transaction = await models.sequelize.transaction({ autocommit: false });

    try {
      await models.acronym.update(model, { where: { id: id } }, { transaction });

      await transaction.commit();

      return model;
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      await transaction.rollback();
      throw new BaseError("Error", this.getErrors(e));
    }
  }

  async delete(id) {
    const transaction = await models.sequelize.transaction({ autocommit: false });

    try {
      await models.acronym.destroy({ where: { id: id }, transaction });

      await transaction.commit();
    } catch (e) {
      winston.log('error', 'Error: ', new Error(e));
      await transaction.rollback();
      throw new ChatError("Error", this.getErrors(e));
    }
  }
}

module.exports = new AcronymService();
