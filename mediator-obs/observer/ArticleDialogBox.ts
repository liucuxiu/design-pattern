import { ListBox } from '../subject/ListBox';
import { TextBox } from '../subject/TextBox';
import { Button } from '../subject/Button';
import { Observer } from './Observer';

export class ArticleDialogBox {
  private listBox: ListBox = new ListBox()
  private textBox: TextBox = new TextBox()
  private button: Button = new Button()


  constructor() {
    const self = this
    this.listBox.addObserver(new class implements Observer {
      update() {
        self.listBoxSelected()
      }
    })

    this.textBox.addObserver(new class implements Observer {
      update() {
        self.textBoxChanged()
      }
    })
  }

  private listBoxSelected() {
    this.textBox.setContent(this.listBox.getSelection())
    this.button.setEnabled(true)
  }

  private textBoxChanged() {
    const content = this.textBox.getContent()
    const isEmpty =  content == null || content.length === 0
    this.button.setEnabled(!isEmpty)
  }

  public simulateUser() {
    this.listBox.setSelection("Article 1")
    console.log("Select list box ", this.listBox.getSelection())

    console.log("Text box ", this.textBox.getContent())
    console.log("Button", this.button.isEnabled())

    this.textBox.setContent(undefined)
    console.log("Text box ", this.textBox.getContent())
    console.log("Button", this.button.isEnabled())

    this.textBox.setContent("Article 2")
    console.log("Text box ", this.textBox.getContent())
    console.log("Button", this.button.isEnabled())
  }
}