import { Encryption } from './Encryption';

export class DESEncryption implements Encryption {
  encrypt(message: string): void {
    console.log(`Encrypting ${message} using DES`);
  }
}