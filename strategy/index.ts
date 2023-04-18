import { ImageStorage } from './ImageStorage';
import { JpgCompressor } from './impl/JpgCompressor';
import { BWFilter } from './impl/BWFilter';
import { PngCompressor } from './impl/PngCompressor';
import { YellowFilter } from './impl/YellowFilter';

const imageStorage = new ImageStorage()
imageStorage.store('fileA', new JpgCompressor(), new BWFilter())
imageStorage.store('fileB', new PngCompressor(), new YellowFilter())