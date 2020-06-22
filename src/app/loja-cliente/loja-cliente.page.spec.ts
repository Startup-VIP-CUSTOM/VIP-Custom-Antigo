import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LojaClientePage } from './loja-cliente.page';

describe('LojaClientePage', () => {
  let component: LojaClientePage;
  let fixture: ComponentFixture<LojaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LojaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
