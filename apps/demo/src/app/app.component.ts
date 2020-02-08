import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'unfurl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  urlInput = new FormControl('');
  modeInput = new FormControl('');

  genPreview() {
   
  }
}


