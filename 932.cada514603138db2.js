"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[932],{6666:(I,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>A});var p=l(6814),i=l(95),_=l(1120),e=l(4769),u=l(9410);function d(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1," Email is Required"),e.qZA())}function c(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1," Email Invalid Format"),e.qZA())}function f(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,d,2,0,"p",15),e.YNc(2,c,2,0,"p",15),e.qZA()),2&n){const r=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForm.get("email"))?null:o.getError("email"))}}function x(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1," Password is Required"),e.qZA())}function Z(n,a){1&n&&(e.TgZ(0,"p",16),e._uU(1,"Must be at least 6 chars "),e.qZA())}function h(n,a){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,x,2,0,"p",15),e.YNc(2,Z,2,0,"p",15),e.qZA()),2&n){const r=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=r.loginForm.get("password"))?null:o.getError("pattern"))}}function T(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1,"Login"),e.qZA())}function v(n,a){1&n&&(e.TgZ(0,"span"),e._UZ(1,"i",17),e.qZA())}function L(n,a){if(1&n&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&n){const r=e.oxw();e.xp6(1),e.Oqu(r.errMsg)}}let A=(()=>{class n{constructor(r,t){this._AuthService=r,this._Router=t,this.errMsg="",this.isLoading=!1,this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handleForm(){const r=this.loginForm.value;this.isLoading=!0,!0===this.loginForm.valid&&this._AuthService.login(r).subscribe({next:t=>{this.isLoading=!1,"success"==t.message&&(localStorage.setItem("etoken",t.token),this._AuthService.decodeUser(),this._Router.navigate(["/home"]))},error:t=>{this.isLoading=!1,this.errMsg=t.error.message}})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(u.e),e.Y36(_.F0))};static#n=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:7,consts:[[1,"w-75","mx-auto","shadow","rounded","p-4","my-3","bg-main-light"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email"],["formControlName","email","type","email","placeholder","Ex: xxxxxx@gmail.xx","id","email",1,"form-control"],["class","alert alert-danger p-1 small mt-1 w-50 mx-auto",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","mt-2",3,"disabled"],[4,"ngIf"],["routerLink","/forgetPass",1,"link-primary","pt-3"],["class","alert alert-danger p-1 w-50 mx-auto mb-0 text-center ",4,"ngIf"],[1,"alert","alert-danger","p-1","small","mt-1","w-50","mx-auto"],["class","mb-0 text-center",4,"ngIf"],[1,"mb-0","text-center"],[1,"fa","fa-spin","fa-spinner"],[1,"alert","alert-danger","p-1","w-50","mx-auto","mb-0","text-center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.YNc(8,f,3,2,"div",6),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.YNc(13,h,3,2,"div",6),e.TgZ(14,"div",9)(15,"button",10),e.YNc(16,T,2,0,"span",11),e.YNc(17,v,2,0,"span",11),e.qZA(),e.TgZ(18,"a",12),e._uU(19,"Forget Password"),e.qZA()()(),e.YNc(20,L,2,1,"p",13),e.qZA()),2&t){let s,m;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",o.loginForm.invalid),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading),e.xp6(3),e.Q6J("ngIf",o.errMsg)}},dependencies:[p.ez,p.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,_.rH]})}return n})()}}]);