import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CabezaFuerzaPage } from './cabeza-fuerza.page';

describe('CabezaFuerzaPage', () => {
  let component: CabezaFuerzaPage;
  let fixture: ComponentFixture<CabezaFuerzaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezaFuerzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CabezaFuerzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
