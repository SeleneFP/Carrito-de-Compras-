package org.edu.pe.interfaces;

import org.edu.pe.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuario extends JpaRepository<Usuario,Integer> {

}
