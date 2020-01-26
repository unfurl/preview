import { Component, OnInit, Input } from '@angular/core';
import { Layout } from '../enums/layout.enum';
import { Mode } from '../enums/mode.enum';
import { PreviewService } from '../providers/preview.service';
import { Observable } from 'rxjs';
import { Preview } from '../models/preview.model';

@Component({
  selector: 'unfurl-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() url: string;
  @Input() layout: Layout = Layout.Grid;
  @Input() mode: Mode = Mode.Detailed;

  preview$: Observable<Preview>;

  constructor(private previewService: PreviewService) { }

  ngOnInit() {
    this.preview$ = this.previewService.load(this.url);
  }

}
