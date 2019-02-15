import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words = [
    {key: 'kimochi', meaning: 'sướng quá'},
    {key: 'yamete', meaning: 'Đừng mà'},
    {key: 'motto tsuyoku', meaning: 'Mạnh nữa'},
    {key: 'Motto hayaku', meaning: 'Nhanh nữa '},
    {key: 'Motto fukaku', meaning: 'Sâu nữa'},
    {key: 'Iku Iku', meaning: 'Em "tới"'}
  ]

  constructor() { }

  find(key: string) {
    return this.words.find(item => item.key === key);
  }
}
