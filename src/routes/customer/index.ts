import { Router } from 'express';
import hyperPay from './hyperSplit';
const baseRouter = Router();
console.log("enter1")

// Setup routers
baseRouter.use('/hyperSplit', hyperPay);


// Export default.
export default baseRouter;