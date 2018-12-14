import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import { PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
