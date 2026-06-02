import { Routes } from '@angular/router';
import { Site } from './site/site';
import { AboutComponent } from './about/about';
import { Products } from './products/products';
import { Cart } from './cart/cart';
import { UserActionsTracker } from './user-actions-tracker/user-actions-tracker';
export const routes: Routes = [
    {
        path: '',
        component: Site,
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'products', component: Products },
            { path: 'cart', component: Cart },
            { path: 'userActionsTracker', component: UserActionsTracker },

            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full'
            }

        ]

    },

];

