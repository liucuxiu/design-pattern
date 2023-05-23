//authenticator -> logger -> compressor
import { Compress } from './Compress';
import { Logger } from './Logger';
import { Authenticator } from './Authenticator';
import { WebServer } from './WebServer';
import { HttpRequest } from './HttpRequest';

const compressor = new Compress(null)
const logger = new Logger(compressor)
const authenticator = new Authenticator(logger)

const server = new WebServer(authenticator)
server.handle(new HttpRequest('admin','1234'))