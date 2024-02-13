import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonService } from '../gen/common/v1/person_connect';
import { ObservableClient } from '../connect/observable-client';
import { Person } from '../gen/common/v1/person_pb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webapp';

  constructor(
    @Inject(PersonService)
    private client: ObservableClient<typeof PersonService>
  ) {
    var person = new Person()
    person.name = "pepe"
    person.email = "example@example"
    this.client.create(new Person())
  }
}
