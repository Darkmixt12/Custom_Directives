import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public counter = signal(10)
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
	  avatar: 'https://reqres.in/img/faces/1-image.jpg'
  })

  public userChangedEffect = effect( () => {
    console.log(`${ this.user().first_name} - ${this.counter()}`)
  })

  onFieldUpdated( field: string, value: string ) {

    console.log({field, value});

    this.user.mutate( current => {
      switch(field) {
        case 'email':
          current.email = value;
        break

        case 'first_name':
          current.first_name = value;
        break

        case 'last_name':
          current.last_name = value;
        break


      }
    })
  }

  increaseBy(value : number){
    this.counter.update(current => current + value);

  }

  // this.user.set({
  //  ..this.user(),
  //  [field]: value,
  //  })
  
  
  
}
