import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './components/input-binding/input-binding.component';
import { ClientComponent } from './components/input-binding/client/client.component';
import { EventComponent } from './components/event/event.component';
import { ChildItemComponent } from './components/event/child-item/child-item.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ItemClientComponent } from './components/clients/item-client/item-client.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { TimerComponent } from './components/parent-child/timer/timer.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { NameChangesComponent } from './components/on-changes/name-changes/name-changes.component';
import { InterceptingComponent } from './components/intercepting/intercepting.component';
import { NameComponent } from './components/intercepting/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
    ParentChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
