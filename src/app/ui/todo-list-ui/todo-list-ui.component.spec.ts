import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListUiComponent } from './todo-list-ui.component';

describe('TodoListUiComponent', () => {
  let component: TodoListUiComponent;
  let fixture: ComponentFixture<TodoListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
