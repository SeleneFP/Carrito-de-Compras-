package org.edu.pe.modelo;

import java.io.Serializable;

public class InnerjoinDetalle implements Serializable {
	private String idPedido;
	private String idProducto;

	public InnerjoinDetalle() {
	}

	public InnerjoinDetalle(String idPedido, String idProducto) {
		this.idPedido = idPedido;
		this.idProducto = idProducto;
	}

	public String getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(String idPedido) {
		this.idPedido = idPedido;
	}

	public String getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(String idProducto) {
		this.idProducto = idProducto;
	}

}
