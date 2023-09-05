const { User } = require('../models');

module.exports = {
  createUser: async (name, email, registryDate, createdBy, createdDate, updatedBy, updatedDate) => {
    try {
      const user = await User.create({
        Name: name,
        Email: email,
        RegistryDate: registryDate,
        CreatedBy: createdBy,
        CreatedDate: createdDate,
        UpdatedBy: updatedBy,
        UpdatedDate: updatedDate,
      });
      return user;
    } catch (error) {
      throw error;
    }
  },

  getUserByID: async (userID) => {
    try {
      const user = await User.findByPk(userID);
      return user;
    } catch (error) {
      throw error;
    }
  },

};
