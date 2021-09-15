import React,{Fragment} from 'react'


function perro(){

    document.getElementById('imagen').src="https://es.himgs.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-t.jpg";
}


function gato(){

    document.getElementById('imagen').src="https://w7.pngwing.com/pngs/367/542/png-transparent-gray-cat-illustration-kitten-anime-cat-manga-cat-cute-television-mammal-animals.png";
}


function tigre(){

    document.getElementById('imagen').src="https://cdnmundo1.img.sputniknews.com/img/107115/78/1071157842_17:0:1879:2047_1920x0_80_0_0_3bcce079ea80cc873feb77116034128d.jpg";
}


function oso(){

    document.getElementById('imagen').src="https://conceptodefinicion.de/wp-content/uploads/2016/02/Oso.jpg";
}


function iguana(){

    document.getElementById('imagen').src="https://inaturalist-open-data.s3.amazonaws.com/photos/37841157/original.jpg?1556923595";
}

 const Seleccion = () => {
    return (
      <Fragment>
      <button className="botones" onClick={perro}  >Perro</button>
      <button className="botones" onClick={gato} >Gato</button>
      <button className="botones" onClick={tigre} >Tigre</button>
      <button className="botones" onClick={oso} >Oso</button>
      <button className="botones" onClick={iguana} >Iguana</button>

      <hr className="barra"></hr>

      <img id="imagen" width="500" height="500" src="https://w7.pngwing.com/pngs/367/542/png-transparent-gray-cat-illustration-kitten-anime-cat-manga-cat-cute-television-mammal-animals.png" alt="cat" />

      </Fragment>



    );
};
export default Seleccion;