import { DialogBox } from './DialogBox';
import { UIControl } from './UIControl';
import { ListBox } from './ListBox';
import { TextBox } from './TextBox';
import { Button } from './Button';

export class ArticleDialogBox extends DialogBox {
  private listBox: ListBox = new ListBox(this)
  private textBox: TextBox = new TextBox(this)
  private button: Button = new Button(this)

  changed(control: UIControl) {
    if (control == this.listBox) {
      this.listBoxSelected()
    }
    else if (control == this.textBox) {
      this.textBoxChanged()
    }
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

  }
}