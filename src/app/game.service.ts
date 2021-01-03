import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface colors {
  id: string;
  color: string;
  square: number;
}
@Injectable({
  providedIn: 'root'
})
export class GameService {
  colors: colors[] = [];
  constructor(private firestore: AngularFirestore) { }
  getColors(){
    // this.colors=[]
    this.firestore.collection('colors').snapshotChanges().subscribe(data => {
      data.map(e => {
        this.colors.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        })
        this.colors.length > 9 && this.colors.shift()
      })
      this.colors.sort((a,b) => (a.square > b.square) ? 1 : ((b.square > a.square) ? -1 : 0));
    });
    console.log(this.colors);
    return this.colors
  }
  createColor(id: string, color: string){
    // console.log(id);
    // delete id;
    console.log(color);

    this.service.firestore.doc('colors/' + id).update({color: color});

    // this.service.firestore.collection('colors').add({color: color, square:parseInt(id)});
}
}
