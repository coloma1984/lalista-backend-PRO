const mongoose = require('mongoose');

mongoose.connect('mongodb://coloma1984:Ahuacate8+@ds159546.mlab.com:59546/heroku_jpr720lq', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
    //mongodb://localhost/angular-auth
    //mysql://b756ad0dbcefdf:d8c25095@eu-cdbr-west-03.cleardb.net/heroku_9a0cf17b594ff50
    //mongodb://<dbuser>:<dbpassword>@ds159546.mlab.com:59546/heroku_jpr720lq