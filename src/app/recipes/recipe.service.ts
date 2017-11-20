import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';


import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken with bobs',
      'A taste chicken with bobs!',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredients('Bobs', 1),
        new Ingredients('Chicken', 200)
      ]
    ),
    new Recipe(
      'Italian pizza',
      'Real italian pizza!',
      'http://brjunetka.ru/wp-content/uploads/2014/08/Pitstsa.jpg',
      [
        new Ingredients('Dough', 1),
        new Ingredients('Chicken', 200),
        new Ingredients('Tomato', 3),
        new Ingredients('Cheese', 400),
        new Ingredients('Pineapple', 300),
        new Ingredients('Mushrooms', 200)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
