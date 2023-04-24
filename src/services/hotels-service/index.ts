import { Hotel } from '@prisma/client';
import { notFoundError, paymentRequiredError, hotelNotIncludedError, remoteTicketError } from '@/errors';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import hotelsRepository from '@/repositories/hotels-repository';

async function getHotelsByUserId(userId: number): Promise<Hotel[]> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) throw notFoundError();

  if (ticket.status !== 'PAID') throw paymentRequiredError();

  if (!ticket.TicketType.includesHotel) throw hotelNotIncludedError();

  if (ticket.TicketType.isRemote) throw remoteTicketError();

  const hotels = await hotelsRepository.findHotels();

  if (hotels.length === 0) throw notFoundError();

  return hotels;
}

const hotelService = { getHotelsByUserId };

export default hotelService;
