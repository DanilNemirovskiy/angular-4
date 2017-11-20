import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";

import {Recipe} from "../../recipes/recipe.model";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  recipe: Recipe;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService, private router: Router) {}

  onSaveRecipes() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  onGetRecipes() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.onLogout();
    this.router.navigate(['/signin']);
  }
}
