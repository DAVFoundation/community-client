var config = null;

if(process.env.NODE_ENV !== 'production'){
  config = require('./config.dev.js');
} else {
  config = require('./config.js');
}

export default config;
