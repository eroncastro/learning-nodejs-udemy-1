modules.exports = {
  getDbConnectionString: function() {
    return `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}` + \
      '@ds115583.mlab.com:15583/testing';
  }
};
