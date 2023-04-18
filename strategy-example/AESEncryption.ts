import { Encryption } from './Encryption';

export class AESEncryption implements Encryption {
  encrypt(message: string): void {
    console.log(`Encrypting ${message} using AES`);
  }

}