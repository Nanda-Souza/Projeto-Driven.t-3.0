import { Hotel, Room } from '@prisma/client';
import { prisma } from '@/config';

async function findHotels(): Promise<Hotel[]> {
  return prisma.hotel.findMany();
}

async function findHotelRooms(hotelId: number): Promise<HotelRooms> {
  return prisma.hotel.findUnique({
    where: { id: hotelId },
    include: { Rooms: true },
  });
}

export default {
  findHotels,
  findHotelRooms,
};

type HotelRooms = Hotel & { Rooms: Room[] };
