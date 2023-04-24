import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getHotels } from '@/controllers';
import { ticketsSchema } from '@/schemas/tickets-schemas';

const hotelsRouter = Router();

hotelsRouter
  .all('/*', authenticateToken)
  //.get('/types', getTicketTypes)
  .get('/', getHotels);
//.post('/', validateBody(ticketsSchema), createTicket);

export { hotelsRouter };
