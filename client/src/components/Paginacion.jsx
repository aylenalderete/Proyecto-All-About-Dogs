import React from 'react'
import "./Paginacion.css"

const Paginacion = ({ itemsPorPag, totalPosts, paginate }) => {
  const pageNumbers = [];
  const division = Math.ceil(totalPosts / itemsPorPag)  //8 dogs / 4 = 2paginas
  for (let i = 1; i <= division; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className= "div-paginador">
        {pageNumbers.map(number => (
          <div>
            <button className= "boton-paginador" onClick={() => paginate(number)}>
              {number}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginacion;
