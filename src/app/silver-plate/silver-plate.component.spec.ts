import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverPlateComponent } from './silver-plate.component';

describe('SilverPlateComponent', () => {
  let component: SilverPlateComponent;
  let fixture: ComponentFixture<SilverPlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverPlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
