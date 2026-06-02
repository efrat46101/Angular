import { Pipe, PipeTransform } from '@angular/core';
import {Product,Level1Category } from '../models';

interface CategoryPathOutput{
path: string; 
color: string;
}
const LEVEL_1_CATEGORIES: any[] = [

  { id: 1, name: 'איפור', colorCode: '#cf0cbfff' },
  { id: 2, name: 'בשמים', colorCode: '#236f23ff' }, 
  { id: 3, name: ' הגנה ושיזוף', colorCode: '#e8c32eff' },
  { id: 4, name: 'טיפוח', colorCode: '#26bc26ff' }, 
];


@Pipe({
  name: 'categoryPath',
  standalone: true
})
export class CategoryPathPipe implements PipeTransform {

 
  transform(level1Id: number | undefined): CategoryPathOutput {
    if (!level1Id) {
      return { path: 'קטגוריה לא מוגדרת', color: 'black' };
    }

    const level1 = LEVEL_1_CATEGORIES.find((c: Level1Category) => c.id === level1Id);
    
    if (!level1) {
      return { path: `ID ${level1Id} לא נמצא`, color: 'black' };
    }

  
    return { 
      path: level1.name, 
      color: level1.colorCode 
    };
  }
}