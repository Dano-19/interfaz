import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
 
  products = [
    { 
      name: 'Polar', 
      price: 567, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.pinimg.com/736x/23/17/54/23175442f10608e55a487a75f26495a7.jpg'
    },
    { 
      name: 'Happy', 
      price: 234, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRK-LZp3UgUQ8oialiW1FTfGzKnDMJ-EVZg&s'
    },
    { 
      name: 'Chopper', 
      price: 57, 
      inventoryStatus: 'In Stock', 
      image: 'https://a.storyblok.com/f/178900/960x540/10220e8c39/chopper-25th-anniversary-one-piece.jpg/m/filters:quality(95)format(webp)' 
    },
    { 
      name: 'Kirara', 
      price: 789, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.cultture.com/pics/2022/03/las-10-mascotas-de-anime-mas-fuertes-clasificadas-6.webp'
    },
    { 
      name: 'Akamaru', 
      price: 45, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://cdn.superaficionados.com/imagenes/akamaru-p1-cke.jpg' 
    },
    { 
      name: 'Madagascar', 
      price: 67, 
      inventoryStatus: 'In Stock', 
      image: 'https://resizer.glanacion.com/resizer/v2/la-pelicula-es-un-catalogo-de-algunos-de-los-EQGTZICQ7VFWVFBJ2WYDCVLVD4.jpeg?auth=88db19c813c59b536564f26b26e4fe898372c28f2041b607861410e24cfcdbfd&width=1280&height=854&quality=70&smart=true' 
    },

  ];

  
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,  
      numScroll: 1
    },

  ];

 
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
