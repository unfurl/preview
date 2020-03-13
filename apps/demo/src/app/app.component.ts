import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'unfurl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  url: string;
  mode: string;
  layout: string;


  form = this.fb.group({
    url: this.fb.control(['']),
    mode: this.fb.control(['']),
    layout: this.fb.control([''])
  });

  /**
   *
   */
  constructor(private fb: FormBuilder) {}


  genPreview() {
    const {url, mode, layout } = this.form.value;
    this.url = url;
    this.mode = mode;
    this.layout =layout

  }

  ngOnInit() {
    this.form = this.fb.group({
      mode: ['compact'],
      layout: ['list'],
      url:['https://unfurl.online']
    });
  }

};
