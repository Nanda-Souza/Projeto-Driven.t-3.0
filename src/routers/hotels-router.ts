import { Router } from 'express';
import { authenticateToken, validateParams } from '@/middlewares';
import { getHotels, getRoomsById } from '@/controllers';
import { hotelsSchema } from '@/schemas/hotels-schemas';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', getHotels)
  .get('/:hotelId', validateParams(hotelsSchema), getRoomsById);

export { hotelsRouter };
