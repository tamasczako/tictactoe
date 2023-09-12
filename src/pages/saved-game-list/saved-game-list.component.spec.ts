import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGameListComponent } from './saved-game-list.component';

describe('SavedGameListComponent', () => {
  let component: SavedGameListComponent;
  let fixture: ComponentFixture<SavedGameListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedGameListComponent]
    });
    fixture = TestBed.createComponent(SavedGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
