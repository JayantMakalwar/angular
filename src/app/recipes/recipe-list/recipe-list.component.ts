import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a test recipe',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreesvg.org%2Fimg%2FIconoAlergenoLacteos-DairyProducts.png&imgrefurl=https%3A%2F%2Ffreesvg.org%2Fdairy-products&tbnid=n0Ozgn4gXroNWM&vet=12ahUKEwiI19q8sYDpAhVJgksFHetcDbwQMygKegUIARCQAg..i&docid=GyOjClx1FmzzMM&w=600&h=600&q=dairy%20logo%20image&hl=en-US&ved=2ahUKEwiI19q8sYDpAhVJgksFHetcDbwQMygKegUIARCQAg'),
    new Recipe('Test Recipe','This is a test recipe',
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffreesvg.org%2Fimg%2FIconoAlergenoLacteos-DairyProducts.png&imgrefurl=https%3A%2F%2Ffreesvg.org%2Fdairy-products&tbnid=n0Ozgn4gXroNWM&vet=12ahUKEwiI19q8sYDpAhVJgksFHetcDbwQMygKegUIARCQAg..i&docid=GyOjClx1FmzzMM&w=600&h=600&q=dairy%20logo%20image&hl=en-US&ved=2ahUKEwiI19q8sYDpAhVJgksFHetcDbwQMygKegUIARCQAg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
