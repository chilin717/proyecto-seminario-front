import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MantenimientoCompletoPage } from './mantenimiento-completo.page';

describe('MantenimientoCompletoPage', () => {
  let component: MantenimientoCompletoPage;
  let fixture: ComponentFixture<MantenimientoCompletoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoCompletoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MantenimientoCompletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
