import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'NmugSMBh_iI', song: 'Maroon 5 - Maps'},
    {id: 'fwK7ggA3-bU', song: 'Maroon 5 - One More Night'},
    {id: '09R8_2nJtjg', song: 'Maroon 5 - Sugar'},
    {id: '3O1_3zBUKM8', song: 'Naughty Boy - La la la ft. Sam Smith (Official Video)'},
    {id: 'mWRsgZuwf_8', song: 'Imagine Dragons - Demons (Official Video)'}
  ];

  constructor() {
  }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
