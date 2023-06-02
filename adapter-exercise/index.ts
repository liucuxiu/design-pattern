import { EmailClient } from './EmailClient';
import { GmailAdapter } from './adapter/GmailAdapter';
import { GmailClient } from './Gmail/GmailClient';

const emailClient = new EmailClient();
emailClient.addProvider(new GmailAdapter(new GmailClient()));


emailClient.downloadEmails();
