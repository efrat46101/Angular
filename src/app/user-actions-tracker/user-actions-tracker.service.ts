
import { Injectable } from '@angular/core';
import { UserAction } from './user-action.model';
@Injectable({
  providedIn: 'root'
})
export class UserActionsTrackerService {

  private actions: UserAction[] = [
  ];

  constructor() {

  }


  addAction(actionName: string, productDetails: string): void {
    const newAction: UserAction = {
      timestamp: new Date().toLocaleString(), 
      actionName,
      productDetails
    };
    this.actions.push(newAction);
  }
  getActions(): UserAction[] {
    return this.actions;
  }
}