// function Tarea(userId,id,title){
//   this.userId=userId;
//   this.id=id;
//   this.title=title;
//   this.completed=false;
// }

// function ToDoList()
// {
//   this.agregarBut = document.getElementById("agregar");
//   this.tareas = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 6,
//     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 7,
//     "title": "illo expedita consequatur quia in",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 8,
//     "title": "quo adipisci enim quam ut ab",
//     "completed": true
//   },
//   {
//     "userId": 1,
//     "id": 9,
//     "title": "molestiae perspiciatis ipsa",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 10,
//     "title": "illo est ratione doloremque quia maiores aut",
//     "completed": true
//   }
//   ];
//   this.iniciar = function(){
//     this.agregarBut.onclick = function(){ 
//     var tarea = document.getElementById("inputAgregar").value;
//     this.agregar(tarea);
//     document.getElementById("inputAgregar").value="";

// /************La tarea nueva se agrega al presionar Enter*************/
//     document.getElementById("inputAgregar")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("agregar").click();
//     }
//     });
//   };
//   }
//   this.mostrar = function(){
//     var divLista = document.getElementById("lista");
//     var listaHTML="<br><ul>";
//     for(var i=this.tareas.length-1; i>=0;i--)
//     {
//       if(this.tareas[i].completed)
//         listaHTML+= "<li><input class='box' type=checkbox value="+i+" checked><span class='info' id="+i+"><strike> "+this.tareas[i].title+ "</strike></span><span class='del' style='float:right'><img name="+i+" width=30px heigth=30px src='assets/img/eliminar.jpg'></span></li><hr style='border-color: #E1DBCD;border-width: 2px'>";
//       else
//         listaHTML +="<li><input class='box' type=checkbox value="+i+"><span  class='info' id="+i+"> "+this.tareas[i].title+ "</span><span class='del' style='float:right'><img name="+i+" width=30px heigth=30px src='assets/img/eliminar.jpg'></span></li><hr style='border-color:#E1DBCD;border-width: 2px'>";
//     }
//     listaHTML+= "</ul>";
//     divLista.innerHTML=listaHTML;
//     this.actualizar();
//   };
//   this.agregar = function(tarea){
//     this.tareas.push(new Tarea(1,this.tareas.length+1,tarea));
//     this.mostrar();
//     this.actualizar();
//   }

//   this.actualizar = function(){
//     var cbs = document.getElementsByClassName('box');//CHECKBOXS
//     for(var i=0;i<cbs.length;i++)
//        cbs[i].onclick = (event) => {
//           this.cambiar(event);
//       };

//     var borrar = document.getElementsByClassName('del');//IMAGENES PARA BORRAR TAREA
//     for(var i=0;i<borrar.length;i++)
//       borrar[i].onclick = (event) => {
//           this.eliminar(event);
//       };

//     var fila = document.getElementsByClassName('info');//CADA LI DE LA LISTA
//     for(var i=0;i<fila.length;i++)
//       fila[i].onclick = (event) =>{
//         this.editar(event);
//       };
//   }
//   this.editar = function(linea){
//     if(!this.tareas[linea.target.id].completed){
//       linea.target.contentEditable=true;
//       linea.target.onkeydown = (event) => {
//         if(event.keyCode == 13) {
//           linea.target.contentEditable=false;
//           this.tareas[linea.target.id].title = linea.target.textContent;
//           this.mostrar();
//         }
//       };
//     }
//   };
//   this.eliminar = function (event){
//     console.log(this.tareas);
//     this.tareas.splice((event.target.name),1);
//     this.mostrar();
//   };
//   this.cambiar= function(event){
//     console.log(event.target)
//     this.tareas[event.target.value].completed = event.target.checked;
//     this.mostrar();
//   };
// }

// var toDo = new ToDoList();
// toDo.iniciar();
// toDo.mostrar();
// toDo.actualizar();






