import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const addressClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:1234',
    package: 'address',
    protoPath: join(__dirname, '../proto/address.proto'),
  },
};
