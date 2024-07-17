package org.edu.pe.interfaces;

import org.edu.pe.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProducto extends JpaRepository<Producto,String> {

}