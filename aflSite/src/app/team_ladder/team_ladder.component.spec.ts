import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { Team_LadderComponent } from './team_ladder.component';
import { Component } from '@angular/core';

describe('Team_LadderComponent', () => {
    let component: Team_LadderComponent;
    let fixture: ComponentFixture<Team_LadderComponent>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Team_LadderComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(Team_LadderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();

  });
});