import { ApplicationError } from '@/protocols';

export function remoteTicketError(): ApplicationError {
  return {
    name: 'RemoteTicketError',
    message: 'Remote ticket is not applied to hotels!',
  };
}
