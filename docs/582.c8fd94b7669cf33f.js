"use strict";(self.webpackChunkprojeto_computer=self.webpackChunkprojeto_computer||[]).push([[582],{7582:(b,g,e)=>{e.r(g),e.d(g,{CarrinhoModule:()=>a});var u=e(6895),h=e(9541),t=e(1571),C=e(5087),s=e(433);function f(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",7),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade "),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(c){const d=t.CHM(n).$implicit;return t.KtG(d.quantidade=c)})("change",function(){t.CHM(n);const c=t.oxw(2);return t.KtG(c.precoTotal())}),t.qZA()(),t.TgZ(10,"button",9),t.NdJ("click",function(){const m=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.removerProdutoCarrinho(m.id))}),t._UZ(11,"i",10),t._uU(12," Remover produto "),t.qZA()()}if(2&r){const n=o.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.hij("pre\xe7o: ",t.gM2(6,4,n.preco,"BRL",!0,"1.2-2"),""),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function _(r,o){if(1&r){const n=t.EpF();t.TgZ(0,"div")(1,"h2",3),t._uU(2,"Carrinho"),t.qZA(),t.TgZ(3,"div")(4,"ul"),t.YNc(5,f,13,9,"li",4),t.qZA(),t.TgZ(6,"h2",5),t._uU(7),t.TgZ(8,"button",6),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.comprar())}),t._uU(9," Comprar "),t.qZA()()()()}if(2&r){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij(" Total: ",n.precoTotal," ")}}function x(r,o){1&r&&t._uU(0,"Nenhum produto no carrinho")}class l{constructor(o,n){this.carrinhoService=o,this.router=n,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obterCarrinho()}precoTotal(){this.total=Number(this.itensCarrinho.reduce((o,n)=>o+n.preco*n.quantidade,0))}removerProdutoCarrinho(o){this.itensCarrinho=this.itensCarrinho.filter(n=>n.id!==o),this.carrinhoService.removerProdutoCarrinho(o)}comprar(){alert("Parabens voce finalizou sua compra"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}l.\u0275fac=function(o){return new(o||l)(t.Y36(C.e),t.Y36(h.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-carrinho"]],decls:4,vars:2,consts:[[1,"main-container"],[4,"ngIf","ngIfElse"],["semProduto",""],[1,"cart-title"],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-x"]],template:function(o,n){if(1&o&&(t.TgZ(0,"section",0),t.YNc(1,_,10,2,"div",1),t.YNc(2,x,1,0,"ng-template",null,2,t.W1O),t.qZA()),2&o){const p=t.MAs(3);t.xp6(1),t.Q6J("ngIf",n.itensCarrinho.length>0)("ngIfElse",p)}},dependencies:[u.sg,u.O5,s.Fj,s.wV,s.JJ,s.On,u.H9],styles:[".main-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;padding:0 70px}.cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]});const v=[{path:"",component:l}];class i{}i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(v),h.Bz]});class a{}a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,i,s.u5]})}}]);