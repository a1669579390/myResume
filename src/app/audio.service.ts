import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
 _audio:HTMLAudioElement;

  constructor() { 
    this._audio=document.createElement('audio');

  }
}
