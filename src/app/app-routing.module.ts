import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MapComponent } from './components/map/map.component';
// import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { ProjectComponent } from './components/project/project.component'
// import { ImageUploadComponent } from './components/image-upload/image-upload.component'
// import { MarketComponent } from './components/market/market.component'
// import { ProductDetailComponent } from './components/product-detail/product-detail.component'


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'project', component: ProjectComponent },
	// { path: 'market/productdetail', component: ProductDetailComponent },
	// { path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	// { path: 'upload', component: ImageUploadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const RoutingComponents = [
	HomeComponent,
	ProjectComponent,
	// HomeComponent,
	// ImageUploadComponent,
	// ProductDetailComponent
];