import express, { NextFunction, Request, Response } from "express"
import {router} from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode");
});