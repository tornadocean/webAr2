import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router }   from '@angular/router';


@Component({
  moduleId : module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
    
})

export class HeroesComponent implements OnInit{ 
  ngOnInit() : void {
    this.getHeroes();
  }
 
  heroes : Hero[];
  selectedHero : Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
};








/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/