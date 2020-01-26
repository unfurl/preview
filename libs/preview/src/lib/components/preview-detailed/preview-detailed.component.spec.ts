import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDetailedComponent } from './preview-detailed.component';

describe('PreviewDetailedComponent', () => {
  let component: PreviewDetailedComponent;
  let fixture: ComponentFixture<PreviewDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
