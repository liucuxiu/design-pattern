import { Editor } from './Editor';
import { History } from './History';

const editor = new Editor()
const history = new History()


editor.content = 'abv'
history.push(editor.createState())

editor.content = 'b'
history.push(editor.createState())

editor.content = 'c'
history.push(editor.createState())

editor.restore(history.pop())
editor.restore(history.pop())
editor.restore(history.pop())

console.log(editor.content)