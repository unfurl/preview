import { Component, OnInit, Input } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'unfurl-preview-simple',
  templateUrl: './preview-simple.component.html',
  styleUrls: ['./preview-simple.component.scss']
})
export class PreviewSimpleComponent implements OnInit {

  @Input() preview: Preview;
  constructor() { }

  ngOnInit() {
  }

}
