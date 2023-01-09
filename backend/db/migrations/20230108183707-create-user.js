const uuidv4 = require('uuidv4');

'use strict';

const { DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal("gen_random_uuid()")
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      nik: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      address: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      gender: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      role: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};