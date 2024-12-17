// deber5.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deber5Component } from './Deber5.component';
import { CarouselModule } from 'primeng/carousel';  
import { TagModule } from 'primeng/tag';              
import { ButtonModule } from 'primeng/button';        
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Deber5Component],  // Declaras tu componente aquí
  imports: [
    CommonModule,
    CarouselModule, 
    TagModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: Deber5Component }  
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Deber5Module { }
