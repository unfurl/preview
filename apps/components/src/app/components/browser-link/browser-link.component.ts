import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unfurl-browser-link',
  templateUrl: './browser-link.component.html',
  styleUrls: ['./browser-link.component.scss']
})
export class BrowserLinkComponent implements OnInit {
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
