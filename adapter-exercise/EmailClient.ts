import { EmailProvider } from './EmailProvider';

export class EmailClient {
  private providerList: EmailProvider[] = [];

  public addProvider(provider: EmailProvider) {
    this.providerList.push(provider);
  }

  public downloadEmails() {
    for (let provider of this.providerList) {
      provider.downloadEmails();
    }
  }
}