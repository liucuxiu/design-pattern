import { Encryption } from './Encryption';

export class ChatClient {
  private encryption: Encryption

  constructor(encryption: Encryption) {
    this.encryption = encryption
  }

  public send(message: string) {
    this.encryption.encrypt(message)

    console.log('Sending the encrypted message...');
  }
}