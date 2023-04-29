import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AnimeFormComponent } from './anime-form/anime-form.component';
import { EpisodeFormComponent } from './episode-form/episode-form.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'lista', component:AnimeListComponent},
  {path: 'autentificare', component:LoginComponent},
  {path: 'adauga', component:EpisodeFormComponent},
  {path: 'postare', component:AnimeFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AnimeListComponent,
    LoginComponent,
    RegisterComponent,
    AnimeFormComponent,
    EpisodeFormComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
