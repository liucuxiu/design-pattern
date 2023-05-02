import { Document } from './Document';
import { History } from './History';

const document = new Document()
const history = new History()

document.content = 'a'
history.push(document.createState())

document.fontName = 'arial'
history.push(document.createState())


document.fontSize = 10
history.push(document.createState())

document.fontSize = 11

document.restore(history.pop())
document.restore(history.pop())

console.log(document.toString())