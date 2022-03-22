import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebbeComponent } from './rebbe.component';

describe('RebbeComponent', () => {
  let component: RebbeComponent;
  let fixture: ComponentFixture<RebbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RebbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
