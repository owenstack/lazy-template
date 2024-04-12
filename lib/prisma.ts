import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

const getPrismaClient = (): PrismaClient => {
  if (prisma) {
    return prisma;
  }

  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }

  return prisma;
};

export default getPrismaClient;