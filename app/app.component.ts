import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{carPart.name}}</h2><p>{{carPart.description}}</p>'
})
export class AppComponent { 
	title = 'Ramesh Racing';
	carPart = {
		"id" : 1,
		"name" : "Thar",
		"description" : "Thar is the prestiage car",
		"inStock" : 5
	}; 
}
