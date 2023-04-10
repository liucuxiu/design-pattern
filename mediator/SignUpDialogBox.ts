import { TextBox } from './TextBox';
import { CheckBox } from './CheckBox';
import { Button } from './Button';
import { DialogBox } from './DialogBox';
import { UIControl } from './UIControl';

export class SignUpDialogBox implements DialogBox {
  private userNameTextBox: TextBox = new TextBox(this);
  private passwordTextBox: TextBox = new TextBox(this);
  private checkBox: CheckBox = new CheckBox(this);
  private button: Button = new Button(this);

  //mediator here
  change(uiControl: UIControl): void {
    if (uiControl == this.userNameTextBox) {
      this.button.isEnable = this.isValid();
    }
    else if (uiControl == this.passwordTextBox) {
      this.button.isEnable = this.isValid();
    }
    else if (uiControl == this.checkBox) {
      this.button.isEnable = this.isValid();
    }
  }


  private isValid() {
    return !!this.userNameTextBox.content
      && !!this.passwordTextBox.content
      && this.checkBox.isChecked;
  }

  public simulateUser() {
    console.log('Step 1', this.button.isEnable);

    this.userNameTextBox.content = 'username';
    console.log('Step 2 add username', this.button.isEnable);

    this.passwordTextBox.content = 'password';
    console.log('Step 3 add password', this.button.isEnable);

    this.checkBox.isChecked = true;
    console.log('Step 4 check check box', this.button.isEnable);

    this.checkBox.isChecked = false;
    console.log('Step 5 uncheck check box', this.button.isEnable);
  }
}