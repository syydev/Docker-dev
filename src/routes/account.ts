import express, { Request, Response } from "express";

let router = express.Router();

// Login
router.get('/accounts', function (req: Request, res: Response) {

});

// Sign Up
router.post('/accounts', function (req: Request, res: Response) {

});

router.put('/accounts', function (req: Request, res: Response) {

});

router.delete('/accounts', function (req: Request, res: Response) {

});

export { router };