import { ChatClient } from './ChatClient';
import { AESEncryption } from './AESEncryption';
import { DESEncryption } from './DESEncryption';

const chatClient = new ChatClient(new AESEncryption())
chatClient.send('aaaaa')
chatClient.send('aaa')