import { Directive, AfterViewInit, ElementRef, PLATFORM_ID, Inject, HostListener, Input, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[textTruncate]'
})
export class TruncateDirective implements AfterViewInit {

  @Input()
  set limit(limit: any) {
    if (limit !== '') {
      this._truncate = limit;
    }
  }
  get limit() {
    return this._truncate;
  }

  @Input() textTruncate: string;

  private _truncate = 200;
  private get el(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  /** The original innerText; */
  private innerText: string;

  constructor(
    private readonly elementRef: ElementRef,
    @Inject(PLATFORM_ID) private readonly platformId
  ) { }

  public ngAfterViewInit(): void {
    this.truncate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.textTruncate) {
      this.truncate();
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.truncate();
  }

  private truncate(): void {
    let platformDiff = 0;
    // verify execution context is the browser platform
    if (!isPlatformBrowser(this.platformId)) {
      platformDiff = 40;
    }

    // store the original innerText
    if (this.textTruncate === undefined || this.textTruncate === '') {
      this.innerText = this.el.innerText.trim();
    }

    // reset the innerText
    this.el.innerText = this.innerText;

    // truncate the text and append the ellipsis
    this.el.innerText = (this.textTruncate?.substr(0, this.limit - platformDiff) ?? '' )+ '...';

  }
}
