import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucrolojaPage } from './lucroloja.page';

describe('LucrolojaPage', () => {
  let component: LucrolojaPage;
  let fixture: ComponentFixture<LucrolojaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucrolojaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucrolojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
