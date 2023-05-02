import { Editor } from './Editor';
import { History } from './History';

const editor = new Editor()
const history = new History()


editor.content = 'a'
history.push(editor.createState())

editor.content = 'b1'
history.push(editor.createState())

editor.content = 'c'
history.push(editor.createState())

editor.restore(history.pop())
editor.restore(history.pop())
editor.restore(history.pop())

console.log(editor.content)