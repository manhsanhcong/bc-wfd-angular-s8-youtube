import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    {id: 'ES3gTZ4MOeM', song: 'The Best of Westlife - Westlife1 Greatest Hits Full Album (HQ)'},
    {id: '1Zn4L7vi9gg', song: 'Nếu Em Còn Tồn Tại - Trịnh Đình Quang (MV Official)'},
    {id: 'aOXvyd9v1cg', song: 'CÀNG NÍU GIỮ CÀNG DỄ MẤT - MR. SIRO (Official MV)'},
    {id: 'ckbI-IKq-b8', song: 'hãy để anh yêu em lần nữa(The Men-lyric-kara)'},
    {id: '8BAdhoeabUM', song: 'ERIK - CHẠM ĐÁY NỖI ĐAU M/V (ft. MR.SIRO)'}
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
