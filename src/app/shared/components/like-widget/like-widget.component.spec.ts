import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { cpuUsage } from 'process';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


describe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[LikeWidgetModule],
      // providers:[{
      //   provide : ComponentFixtureAutoDetect, useValue: true
      // }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    const component = fixture.componentInstance;

  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () =>{
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  })

  it('Should not ID during ngOnInit when (@Input id) is not assigned', () =>{
    const someId = 'someId';
    component.id = someId;
    expect(component.id).toBe(someId);
  })

  it(`#${LikeWidgetComponent.prototype.like.name}
      should trigger (@Output liked) when called`,()  => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  })


});
