import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserLinkComponent } from './browser-link.component';

describe('BrowserLinkComponent', () => {
  let component: BrowserLinkComponent;
  let fixture: ComponentFixture<BrowserLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
