import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import mongo from "connect-mongo";
import mongoose from "mongoose";
import { MONGODB_URI, SESSION_SECRET } from './utils/env';

const app = express();
const MongoStore = mongo(session);

// Route handlers
import * as account from './routes/account';

app.use('/account', account.router)

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  store: new MongoStore({
    url: MONGODB_URI,
    autoReconnect: true
  })
}));

// Start server
app.listen(app.get('port'), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});