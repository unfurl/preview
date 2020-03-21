import { Component, OnInit, Input } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'unfurl-preview-detailed',
  templateUrl: './preview-detailed.component.html',
  styleUrls: ['./preview-detailed.component.scss']
})
export class PreviewDetailedComponent implements OnInit {

  @Input() preview: Preview;

  constructor() { }

  ngOnInit() {
  }

}
