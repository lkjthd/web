import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Insurance } from '../interfaces/insurance';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private firestore: AngularFirestore) { }

  create(ins: Insurance) {
    return this.firestore.collection<Insurance>("insurances").doc(ins.id).set(ins);
  }

  getWithId(id: string) {
    return this.firestore.collection<Insurance>("insurances").doc(id).valueChanges();
  }

  update(ins: Insurance) {
    return this.firestore.collection<Insurance>("insurances").doc(ins.id).set(ins);
  }

  delete(id: string) {
    return this.firestore.collection<Insurance>("insurances").doc(id).delete();
  }

  getMostRecentInsurance() {
    return this.firestore.collection<Insurance>("insurances", ref => {
      return ref.orderBy('dateSubmitted', 'asc').limit(1);
    }).valueChanges();
  }

  getLeastRecentInsurance() {
    return this.firestore.collection<Insurance>("insurances", ref => {
      return ref.orderBy('dateSubmitted', 'desc').limit(1);
    }).valueChanges();
  }
}
