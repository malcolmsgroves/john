import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyMapComponent } from './nearby-map.component';

describe('NearbyMapComponent', () => {
  let component: NearbyMapComponent;
  let fixture: ComponentFixture<NearbyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
