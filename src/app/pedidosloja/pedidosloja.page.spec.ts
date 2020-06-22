import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoslojaPage } from './pedidosloja.page';

describe('PedidoslojaPage', () => {
  let component: PedidoslojaPage;
  let fixture: ComponentFixture<PedidoslojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoslojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoslojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
