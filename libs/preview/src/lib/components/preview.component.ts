import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Layout } from '../enums/layout.enum';
import { Mode } from '../enums/mode.enum';
import { PreviewService } from '../providers/preview.service';
import { Observable, Subject, scheduled } from 'rxjs';
import { Preview } from '../models/preview.model';

@Component({
  selector: 'unfurl-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  private  _url: string;
  private  _layout: Layout = Layout.Grid;
  private  _mode: Mode = Mode.Detailed;

  @Input() set url(url: string) {
    this._url = url;
    this.cdRef.markForCheck();
  };
  get url(): string {
    return this._url;
  }

  @Input() set layout(layout: Layout) {
    this._layout = layout;
    this.cdRef.markForCheck();
  };
  get layout(): Layout {
    return this._layout;
  }

  @Input() set mode(mode: Mode) {
    this._mode = mode;
    this.cdRef.markForCheck();
  };
  get mode(): Mode {
    return this._mode;
  }

  private previewSubject =  new Subject<Preview>();

  preview$: Observable<Preview> = this.previewSubject.asObservable();

  constructor(private previewService: PreviewService, private cdRef: ChangeDetectorRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes.url) {
      if(this.url) {
        this.previewService.load(this.url)
        .subscribe(
          preview => {
            this.previewSubject.next(preview);
            setTimeout(() => this.cdRef.detectChanges());
          }
        );
      }
    }
    if(changes.mode || changes.layout) {
      this.cdRef.markForCheck();
    }
  }

  ngOnInit() {

  }

}
