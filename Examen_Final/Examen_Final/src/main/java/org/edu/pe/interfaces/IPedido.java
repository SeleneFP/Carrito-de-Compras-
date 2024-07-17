package org.edu.pe.interfaces;

import org.edu.pe.modelo.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPedido extends JpaRepository<Pedido,String>{

}
