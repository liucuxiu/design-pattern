import { EmailProvider } from '../EmailProvider';
import { GmailClient } from '../Gmail/GmailClient';

export class GmailAdapter implements EmailProvider {
  constructor(private provider: GmailClient) {}

  downloadEmails(): void {
    this.provider.connect();
    this.provider.getEmails()
    this.provider.disconnect();
  }
}