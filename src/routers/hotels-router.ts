import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getHotels, getRoomsById } from '@/controllers';
import { hotelsSchema } from '@/schemas/hotels-schemas';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  .get('/', getHotels)
  .get('/:hotelId', validateBody(hotelsSchema), getRoomsById);

export { hotelsRouter };
