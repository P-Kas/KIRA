import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'btpannonces',
    loadChildren: () => import('./btpannonces/btpannonces.module').then( m => m.BTPAnnoncesPageModule)
  },
  {
    path: 'electronique-annonces',
    loadChildren: () => import('./electronique-annonces/electronique-annonces.module').then( m => m.ElectroniqueAnnoncesPageModule)
  },
  {
    path: 'jardinage-annonces',
    loadChildren: () => import('./jardinage-annonces/jardinage-annonces.module').then( m => m.JardinageAnnoncesPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./compte/compte.module').then( m => m.ComptePageModule),

  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'rajouter-produit',
    loadChildren: () => import('./rajouter-produit/rajouter-produit.module').then( m => m.RajouterProduitPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule),
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule),

  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ele-ajout',
    loadChildren: () => import('./ele-ajout/ele-ajout.module').then( m => m.EleAjoutPageModule)
  },
  {
    path: 'jard-aout',
    loadChildren: () => import('./jard-aout/jard-aout.module').then( m => m.JardAoutPageModule)
  },
  {
    path: 'mes',
    loadChildren: () => import('./mes/mes.module').then( m => m.MesPageModule)
  },
  {
    path: 'favories',
    loadChildren: () => import('./favories/favories.module').then( m => m.FavoriesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



