import { Component, OnInit } from '@angular/core';
import { RecipeModel } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply my receipe', 'https://i.picsum.photos/id/292/1200/720.jpg'),
    new RecipeModel('A Test Recipe 2', 'This is simply my receipe 2', 'https://i.picsum.photos/id/292/1200/720.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
