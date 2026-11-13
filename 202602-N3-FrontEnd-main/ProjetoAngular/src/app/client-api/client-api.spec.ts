import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApi } from './client-api';

describe('ClientApi', () => {
  let component: ClientApi;
  let fixture: ComponentFixture<ClientApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
