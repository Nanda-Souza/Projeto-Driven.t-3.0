import Joi from 'joi';
import { InputHotelBody } from '@/protocols';

export const hotelsSchema = Joi.object<InputHotelBody>({
  hotelId: Joi.number().required(),
});
