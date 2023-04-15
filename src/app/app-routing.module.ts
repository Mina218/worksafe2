import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AppLayoutComponent } from "./employee/layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'pages', loadChildren: () => import('./shared/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'booking', loadChildren: () => import('./employee/calender/calender.module').then(m => m.CalenderModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./shared/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./shared/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'home', loadChildren: () => import('./shared/components/home/home.module').then(m => m.HomeModule) },

            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
