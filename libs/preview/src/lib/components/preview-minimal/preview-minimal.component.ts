import { Component, OnInit, Input } from '@angular/core';
import { Preview } from '../../models/preview.model';

@Component({
  selector: 'unfurl-preview-minimal',
  templateUrl: './preview-minimal.component.html',
  styleUrls: ['./preview-minimal.component.scss']
})
export class PreviewMinimalComponent implements OnInit {
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
