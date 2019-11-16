import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenonmeComponent } from './seenonme.component';

describe('SeenonmeComponent', () => {
  let component: SeenonmeComponent;
  let fixture: ComponentFixture<SeenonmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenonmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenonmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
