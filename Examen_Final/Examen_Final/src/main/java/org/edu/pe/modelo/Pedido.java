package org.edu.pe.modelo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pedidos")
public class Pedido {
	@Id
	private String idPedido;
	private String idUsuario;
	private String fechaVenta;
	private double montoTotal;
	private char estado;

	public Pedido() {
	}

	public Pedido(String idPedido, String idUsuario, String fechaVenta, double montoTotal, char estado) {
		this.idPedido = idPedido;
		this.idUsuario = idUsuario;
		this.fechaVenta = fechaVenta;
		this.montoTotal = montoTotal;
		this.estado = estado;
	}

	public String getIdPedido() {
		return idPedido;
	}

	public void setIdPedido(String idPedido) {
		this.idPedido = idPedido;
	}

	public String getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getFechaVenta() {
		return fechaVenta;
	}

	public void setFechaVenta(String fechaVenta) {
		this.fechaVenta = fechaVenta;
	}

	public double getMontoTotal() {
		return montoTotal;
	}

	public void setMontoTotal(double montoTotal) {
		this.montoTotal = montoTotal;
	}

	public char getEstado() {
		return estado;
	}

	public void setEstado(char estado) {
		this.estado = estado;
	}

}
