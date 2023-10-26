import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifDonneesComponent } from './recapitulatif-donnees.component';

describe('RecapitulatifDonneesComponent', () => {
  let component: RecapitulatifDonneesComponent;
  let fixture: ComponentFixture<RecapitulatifDonneesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecapitulatifDonneesComponent]
    });
    fixture = TestBed.createComponent(RecapitulatifDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
