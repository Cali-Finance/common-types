import { FastifyRequest } from 'fastify';

export interface IRequest extends FastifyRequest {
  session: { walletId: string };
}
