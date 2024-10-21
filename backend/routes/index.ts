import express, { Request, Response, NextFunction } from 'express';
import { userSignUpController } from '../controller/userSignUp';
import userSignInController from '../controller/userSignin';

const router = express.Router();
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

router.post('/signup', asyncHandler(userSignUpController));

router.post('/signin', asyncHandler(userSignInController));


export default router;
