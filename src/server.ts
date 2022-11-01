import express, { NextFunction, Request, Response } from "@types/express";
import {router} from "./routes";

const app = express();

app.use(express.json());
app.use(router);

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})



app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode");
});