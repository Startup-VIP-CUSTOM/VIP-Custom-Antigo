import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loja-cliente',
    loadChildren: () => import('./loja-cliente/loja-cliente.module').then( m => m.LojaClientePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastroloja',
    loadChildren: () => import('./cadastroloja/cadastroloja.module').then( m => m.CadastrolojaPageModule)
  },
  {
    path: 'cadastrocliente',
    loadChildren: () => import('./cadastrocliente/cadastrocliente.module').then( m => m.CadastroclientePageModule)
  },
  {
    path: 'modelo',
    loadChildren: () => import('./modelo/modelo.module').then( m => m.ModeloPageModule)
  },
  {
    path: 'personalizacao',
    loadChildren: () => import('./personalizacao/personalizacao.module').then( m => m.PersonalizacaoPageModule)
  },
  {
    path: 'escolherloja',
    loadChildren: () => import('./escolherloja/escolherloja.module').then( m => m.EscolherlojaPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'modelo',
    loadChildren: () => import('./modelo/modelo.module').then( m => m.ModeloPageModule)
  },
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then( m => m.BoletoPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'incloja',
    loadChildren: () => import('./incloja/incloja.module').then( m => m.InclojaPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'lucroloja',
    loadChildren: () => import('./lucroloja/lucroloja.module').then( m => m.LucrolojaPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'perfil-loja',
    loadChildren: () => import('./perfil-loja/perfil-loja.module').then( m => m.PerfilLojaPageModule)
  },
  {
    path: 'comprado',
    loadChildren: () => import('./comprado/comprado.module').then( m => m.CompradoPageModule)
  },
  {
    path: 'pedidosloja',
    loadChildren: () => import('./pedidosloja/pedidosloja.module').then( m => m.PedidoslojaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
