import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LivingTimeComponent} from './living-time/living-time.component';
import {SumTestComponent} from './sum-test/sum-test.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './auth.guard';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';

const routes: Routes = [
  {
    path: 'livingtime',
    component: LivingTimeComponent
  },
  {
      path: 'sumtest',
    component: SumTestComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent,
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
    }
    ]
  },
  {
    path: 'login-step-1',
    component: LoginStep1Component
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
