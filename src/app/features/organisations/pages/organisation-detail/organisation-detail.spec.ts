import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationDetail } from './organisation-detail';

describe('OrganisationDetail', () => {
  let component: OrganisationDetail;
  let fixture: ComponentFixture<OrganisationDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
