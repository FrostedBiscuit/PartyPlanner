import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListPageComponent } from './guest-list-page.component';

describe('GuestListPageComponent', () => {
  let component: GuestListPageComponent;
  let fixture: ComponentFixture<GuestListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
