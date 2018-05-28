import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

const routing: Routes = [
    {path:'',loadChildren:() => HomeModule},
    {path:'home',loadChildren:() => HomeModule},
    {path:'admin',loadChildren:() => AdminModule}
    
    ];
    export const appRoutes = RouterModule.forRoot(routing);
    