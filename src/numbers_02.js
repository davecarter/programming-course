function test(A, B, C){
  // Comprobamos si A es el mayor
  if(A > B){
    if((A > C) && (B > C)){
      // A es el mayor y C es el menor
      console.log("A es el valor mayor");
      console.log("C es el valor menor");
    } else {
      // Sino A es el mayor y el menor es B
      console.log("A es el valor mayor");
      console.log("B es el valor menor");
    }
  } else if (B > A){
    // Comprobamos si B es el mayor
    if ((B > C) && (A > C)){
      // C es el menor
      console.log("B es el valor mayor");
      console.log("C es el valor menor");
    } else {
      console.log("B es el valor mayor");
      console.log("A es el valor menor");
    }
  } else if (C > A){
    if((C > B) && (A > B)){
      console.log("C es el valor mayor");
      console.log("B es el valor menor");
    } else {
      console.log("C es el valor mayor");
      console.log("A es el valor menor");
    }
  }
}

test(100, 250, 3000);
