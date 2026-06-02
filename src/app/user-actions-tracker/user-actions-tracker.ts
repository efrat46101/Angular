
import { Component, OnInit } from '@angular/core';
import { UserAction } from './user-action.model';
import { UserActionsTrackerService } from './user-actions-tracker.service'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-user-actions-tracker',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './user-actions-tracker.html',
  styleUrls: ['./user-actions-tracker.css']
})
export class UserActionsTracker implements OnInit {
  actions: UserAction[] = [];
  sortDirection: 'asc' | 'desc' = 'desc'; 

  constructor(private trackerService: UserActionsTrackerService) {}

  ngOnInit(): void {
    this.actions = this.trackerService.getActions();
    this.sortActionsByDate(); 
  }


  sortActionsByDate(): void {
    this.actions.sort((a, b) => {
 
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);

      if (this.sortDirection === 'asc') {
        return dateA.getTime() - dateB.getTime(); 
      } else {
        return dateB.getTime() - dateA.getTime(); 
      }
    });
  }

  
  toggleSort(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortActionsByDate();
  }
}