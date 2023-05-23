import { CompressCloudStream } from './CompressCloudStream';
import { EncriptedStream } from './EncriptedStream';
import { CloudStream } from './CloudStream';

const stream = new CompressCloudStream(new EncriptedStream(new CloudStream()));

const stream2 = new EncriptedStream(new CompressCloudStream(new CloudStream()));
stream.write('hello world')

stream2.write('hello world')