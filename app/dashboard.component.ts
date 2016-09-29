import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId : module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{ 
    ngOnInit() : void {
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    heroes: Hero[] = [];
    constructor(private heroService: HeroService){}
    gotoDetail(hero: Hero) : void {
        
    }
}