import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface colors {
  id: string;
  color: string;
  square: number;
}
interface partColor {
  color: string;
  square: number;
}
@Injectable({
  providedIn: 'root'
})
export class GameService {
  colors: colors[] = [];
  constructor(private firestore: AngularFirestore) { }
  getColors() {
    this.firestore.collection('colors').snapshotChanges().subscribe(data => {
      data.map(e => {
        const data: colors = {
          ...e.payload.doc.data() as partColor,
          id: e.payload.doc.id,
        }
        this.colors.push(data)
        this.colors.length > 9 && this.colors.shift()
      })
      this.colors.sort((a, b) => (a.square > b.square) ? 1 : ((b.square > a.square) ? -1 : 0));
    });
    return this.colors
  }
  createColor = (id: string, color: string) => {
    this.firestore.doc('colors/' + id).update({ color: color });
  }
}
