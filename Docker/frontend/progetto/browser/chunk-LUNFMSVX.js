import{J as l}from"./chunk-I25GFFKI.js";import{F as c,I as u,a as o,b as h,db as d,eb as m,fb as k}from"./chunk-KLZVGRBR.js";var a={headers:new d({"Content-Type":"application/json"})},w=(()=>{let s=class s{constructor(t){this.http=t,this.taskURI=l.apiUrl+"task/"}getTasks(){return this.http.get(this.taskURI+"selecttasks")}insertTaskObj(t){return this.http.post(this.taskURI+"insertobj",t,a)}insertTaskParams(t,e,i,p){let n=new m().appendAll({titolo:t,descrizione:e,dataFine:i,id_dipendente:p});return this.http.post(this.taskURI+"insertparams",{},h(o({},a),{params:n}))}updateTaskObj(t){return this.http.put(this.taskURI+"updateobj",t,a)}updateTaskParams(t,e,i,p,n,f,I){let j=new m().appendAll({titolo:t,descrizione:e,stato:i,dataInizio:p,dataFine:n,id_dipendente:f,id_task:I});return this.http.put(this.taskURI+"updateparams",h(o({},a),{params:j}))}deleteTask(t){return this.http.delete(this.taskURI+"delete?id="+t,a)}};s.\u0275fac=function(e){return new(e||s)(u(k))},s.\u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();export{w as a};