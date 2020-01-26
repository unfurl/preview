import { Directive, AfterViewInit, ElementRef, PLATFORM_ID, Inject, HostListener, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[textTruncate]'
})
export class TruncateDirective implements AfterViewInit {

  @Input()
  set textTruncate(limit: any) {
    if (limit !== '') {
      this._truncate = limit;
    }
  }
  get textTruncate() {
    return this._truncate;
  }

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

  @HostListener('window:resize')
  private onWindowResize() {
    this.truncate();
  }

  private truncate(): void {
    let platformDiff = 0;
    // verify execution context is the browser platform
    if (!isPlatformBrowser(this.platformId)) {
      platformDiff = 40;
    }

    // store the original innerText
    if (this.innerText === undefined) {
      this.innerText = this.el.innerText.trim();
    }

    // reset the innerText
    this.el.innerText = this.innerText;

    // truncate the text and append the ellipsis
    this.el.innerText = `${this.el.innerText.substr(0, this.textTruncate - platformDiff)}…`;

  }
}
