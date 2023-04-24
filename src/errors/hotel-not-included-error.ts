import { ApplicationError } from '@/protocols';

export function hotelNotIncludedError(): ApplicationError {
  return {
    name: 'HotelNotIncludedError',
    message: 'Ticket does not include hotel rooms!',
  };
}
