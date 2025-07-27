import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomPageComponent } from './fom-page.component';

describe('FomPageComponent', () => {
  let component: FomPageComponent;
  let fixture: ComponentFixture<FomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
