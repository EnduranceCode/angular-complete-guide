import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  name = 'EnduranceCode';
  userName = '';
  inputFeedback: String;
  buttonClickable: boolean = false;

  onTextInput(event: Event) {
    if ((<HTMLInputElement>event.target).value.trim().length != 0) {
      this.inputFeedback = 'The value typed is: ' + this.userName;
      this.buttonClickable = true;
    } else {
      this.inputFeedback = '';
      this.buttonClickable = false;
    }
  }

  onClickButton() {
    this.userName = '';
    this.inputFeedback = '';
  }
}
