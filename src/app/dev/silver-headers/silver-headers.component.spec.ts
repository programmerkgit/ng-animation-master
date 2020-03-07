import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverHeadersComponent } from './silver-headers.component';

describe('SilverHeadersComponent', () => {
  let component: SilverHeadersComponent;
  let fixture: ComponentFixture<SilverHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
