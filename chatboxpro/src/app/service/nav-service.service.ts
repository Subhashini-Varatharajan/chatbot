import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  constructor() { }
  tenants = [
    'New Team',
    'QA_Team',
    'Agosto.com',
    'allSaints',
    'benchtenant',
    'Policy_Tenant',
    'DummyTenant2',
    'Corestack_tenant',
  ];
}
