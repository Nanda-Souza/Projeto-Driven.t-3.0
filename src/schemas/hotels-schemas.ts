import Joi from 'joi';
import { InputHotelParam } from '@/protocols';

export const hotelsSchema = Joi.object<InputHotelParam>({
  hotelId: Joi.number().integer().greater(0).required(),
});
