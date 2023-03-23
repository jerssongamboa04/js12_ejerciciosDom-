

// const title = document.getElementById("title");
// console.log("title:", title);     // <h1 id="title">Título</h1>

// const subtitle = document.getElementsByTagName("h2");
// console.log("subtitle:", subtitle);  // [h2#subtitle]

// const paragraphs = document.getElementsByClassName("paragraph");
// console.log("paragraphs:", paragraphs);  // [p.paragraph, p.paragraph, p.paragraph]

// const img = document.querySelector("div > img");
// console.log("img:", img);  // <img src="./assets/photo.jpg">

// const spans = document.querySelectorAll("div > .inner-span");
// console.log("spans:", spans);  // [span.inner-span, span.inner-span]

// const boton = document.createElement("button");


// ============= Ejercicio #1 ========================
// El ejercicio consiste en crear, usando exclusivamente JavaScript, 100 botones e introducirlos en la `section`.
// 1. Estos botones tendrán como texto su número: el primer botón tendrá `1`, el segundo `2`, etc.
// 2. El primer botón tendrá un color de fondo **_rojo_**, el segundo **_azul_**, el tercero **_rojo_**, el cuarto **_azul_**, etc.

// Una vez hayas creado los botones, da a cada **_quinto_** botón un color de texto **_verde_**. 

// const section = document.querySelector("section");

// for (let i = 1; i <= 100; i++) {
//     const boton = document.createElement("button");
//     boton.innerText = i;
//     boton.style.width = "40px"
//     boton.style.height = "40px"
//     boton.style.margin= "2px"
//     if (i % 5 === 0 && i % 2 !== 0) {
//         boton.style.color = "green";
//         boton.style.background = "red"

//     } else if (i % 2 === 0){ 
//         boton.style.background = "blue";
// }else {
//     boton.style.background = "red"
// }
//     section.appendChild(boton);
// }


// ============= Ejercicio #2 ========================

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const span = document.querySelectorAll("span");


// for (let i = 0; i < colors.length; i++) {

//      span[i].style.color = colors[i];
//     console.log(span[i]);
// }

// ============= Ejercicio #3 ========================

// -------------- Ejercicio 3.1----------------

// 1.En el documento sobra el h2 con la clase subtitle. Debes eliminarlo.

// const div = document.querySelector("div")
// const h2 = document.querySelectorAll("#subtitle");
// console.log(h2);

// h2.forEach(h2 => h2.remove());
// console.log(h2);

// -------------- Ejercicio 3.2----------------

// 2.Los span con la clase bold deben aparecer en negrita.
//  Hazlo sin tocar el documento de CSS: dale los estilos inline.

// const paragraph = document.querySelector("p")
// const span = document.querySelectorAll(".bold");
// console.log(span);

// for (let i = 0; i < span.length; i++) {

//      span[i].style.fontWeight = "bold";
// }
// console.log(span);

// -------------- Ejercicio 3.3----------------

// 3.Los span con la clase italics deben ir en cursiva.
//  Hazlo sin tocar el documento de CSS: dale los estilos inline.

// const paragraph = document.querySelectorAll("p")
// const span = document.querySelectorAll(".italics");
// console.log(span);

// for (let i = 0; i < span.length; i++) {

//      span[i].style.fontStyle = "italic";
// }
// console.log(span);

// -------------- Ejercicio 3.4----------------

// En el article con la id="index" hay dentro una lista que ha perdido sus
//  elementos. Te proporcionamos aquí el array con el texto de dichos
//   elementos en orden; itera sobre la lista y ve creando los li
//    necesarios con el texto 
//    apropiado: ["Introducción", "Biografía", "Obras"].

// const apropiado = ["Introducción", "Biografía", "Obras"];

// const article = document.querySelector("#index");
// console.log(article);

// const ul = document.querySelector("article > ul");
// console.log(ul);


// for (let i = 0; i < apropiado.length; i++) {

//     const li = document.createElement("li");
//      li.innerText = apropiado[i];
//      ul.appendChild(li);
// }
// console.log(ul);

// // -------------- Ejercicio 3.5-----------------

// 5. Todos los elementos de las listas dentro de la
//  `section` con las obras deben tener la clase `"work-item"`.

// const section = document.querySelectorAll("#works-section")
// console.log(section);

// const article = document.querySelectorAll(".works-article")
// console.log(article);

// const ul = document.querySelectorAll("article > ul ")
// console.log(ul);

// const li = document.querySelectorAll("li")
// console.log(li);


// for (let i = 0; i < li.length; i++) {

//   li[i].classList.add("works-section"); 

// }
// console.log(li);

// // -------------- Ejercicio 3.6-----------------

// 6. A todos los link del documento les faltan sus `url`
// . Aquí tienes un array con las mismas, en orden; itera sobre 
// la lista y da a cada elemento su atributo `href` con la `url`
//  const correspondiente= [
// "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_27",
// "https://es.wikipedia.org/wiki/Albert_Einstein",
// "https://es.wikipedia.org/wiki/John_Maynard_Keynes",
// "https://es.wikipedia.org/wiki/Marie_Curie",
// "https://es.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
// "https://es.wikipedia.org/wiki/Rafael_Alberti",
// "https://es.wikipedia.org/wiki/Salvador_Dal%C3%AD"
// ];

// const link = document.querySelectorAll("a");
// console.log(link);

// for (let i = 0; i < correspondiente.length; i++) {
    
//     link[i].href = correspondiente[i];
// }
// console.log(link);









