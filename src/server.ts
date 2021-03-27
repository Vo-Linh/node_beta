import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import routesProduct from "./routes/products.routes";
import routesIndex from "./routes/index.routes";
dotenv.config();


const app = express();

const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "/public")))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',routesIndex);;
app.use('/products', routesProduct);


app.listen(PORT, async () => {
    console.log('connect on port ' + PORT)
    try {
        await createConnection();
        console.log('database connected')
    } catch (err) {
        console.log(err)
    }
    
})




