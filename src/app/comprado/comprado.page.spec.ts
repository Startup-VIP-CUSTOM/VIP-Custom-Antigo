import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompradoPage } from './comprado.page';

describe('CompradoPage', () => {
  let component: CompradoPage;
  let fixture: ComponentFixture<CompradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
