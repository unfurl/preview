import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSimpleComponent } from './preview-simple.component';

describe('PreviewSimpleComponent', () => {
  let component: PreviewSimpleComponent;
  let fixture: ComponentFixture<PreviewSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
