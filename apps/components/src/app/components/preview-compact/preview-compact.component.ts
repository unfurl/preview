import { Component, OnInit, Input } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'unfurl-preview-compact',
  templateUrl: './preview-compact.component.html',
  styleUrls: ['./preview-compact.component.scss']
})
export class PreviewCompactComponent implements OnInit {

  @Input() preview: Preview;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

}
