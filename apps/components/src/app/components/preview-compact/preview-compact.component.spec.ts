import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCompactComponent } from './preview-compact.component';

describe('PreviewCompactComponent', () => {
  let component: PreviewCompactComponent;
  let fixture: ComponentFixture<PreviewCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
