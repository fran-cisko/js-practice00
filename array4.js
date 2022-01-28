
// teniendo un lista de palabras, hacer una nueva que contenga solo las que tengan más de 5 letras.
palabras = ["termo", "espectaculo", "paraguas", "paco", "barrinche", "calendario" ];
function wordMoreFive(listaPalabras){
  let listMoreFive = [];
  for(let palabra of listaPalabras){
      if(palabra.length > 5){
          listMoreFive.push(palabra);
      }
    
  }
  return listMoreFive;
  

}
wordMoreFive(palabras);

// function wordMoreFive(listaPalabras){
//     let listMoreFive = [];
//     for(let palabra=0 ; palabra< listaPalabras.length; palabras++){
//         if(palabra.length > 5){
//             listMoreFive.push(palabra);
//         }
      
//     }
//     return listMoreFive;
    
  
//   }
//   wordMoreFive(palabras);