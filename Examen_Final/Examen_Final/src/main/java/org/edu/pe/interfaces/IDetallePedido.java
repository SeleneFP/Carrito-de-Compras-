package org.edu.pe.interfaces;

import org.edu.pe.modelo.DetallePedido;
import org.edu.pe.modelo.InnerjoinDetalle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDetallePedido extends JpaRepository<DetallePedido,InnerjoinDetalle> {

}
