package org.edu.pe.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "detallepedido")
@IdClass(InnerjoinDetalle.class)
public class DetallePedido {
	@Id
	private String idPedido;
	@Id
	private String idProducto;
	private int cantidad;
	private double precioUnidad;
	private char estado;

	public DetallePedido() {
	}

	public DetallePedido(String idPedido, String idProducto, int cantidad, double precioUnidad, char estado) {
		this.idPedido = idPedido;
		this.idProducto = idProducto;
		this.cantidad = cantidad;
		this.precioUnidad = precioUnidad;
		this.estado = estado;
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

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public double getPrecioUnidad() {
		return precioUnidad;
	}

	public void setPrecioUnidad(double precioUnidad) {
		this.precioUnidad = precioUnidad;
	}

	public char getEstado() {
		return estado;
	}

	public void setEstado(char estado) {
		this.estado = estado;
	}

}
