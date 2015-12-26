

module.exports = {

   connection: 'someMysqlServer',
   tableName: 'users',

   attributes: {

      id: {
         type: 'integer',
         unique: true,
         primaryKey: true
      },

      age: {
         type: 'integer'
      },

     lastName:{
         type: 'string'
     },

     name: {
         type: 'string',
         columnName: 'name'
     },

     password: {
         type: 'string'
     },

     email: {
         type: 'email',
         unique: true
     }
 },


};
