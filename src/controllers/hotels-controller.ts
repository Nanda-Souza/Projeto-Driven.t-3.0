import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import hotelService from '@/services/hotels-service';

export async function getHotels(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;

  try {
    const hotels = await hotelService.getHotelsByUserId(userId);
    return res.status(httpStatus.OK).send(hotels);
  } catch (e) {
    next(e);
  }
}

export async function getRoomsById(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<Response> {
  const { userId } = req;
  const { hotelId } = req.params as { hotelId: string };

  try {
    const hotelRooms = await hotelService.getRoomsbyHotelId(userId, parseInt(hotelId));
    return res.status(httpStatus.OK).send(hotelRooms);
  } catch (e) {
    next(e);
  }
}
