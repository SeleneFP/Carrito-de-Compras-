package org.edu.pe.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

	@Entity
	@Table(name = "productos")
public class Producto {
		@Id
		private String idProducto;
		private String descripcion, imagen;
		private double precioUnidad;
		private int stock;

		public Producto() {
		}

		public Producto(String idProducto, String descripcion, String imagen, double precioUnidad, int stock) {
			this.idProducto = idProducto;
			this.descripcion = descripcion;
			this.imagen = imagen;
			this.precioUnidad = precioUnidad;
			this.stock = stock;
		}

		public String getIdProducto() {
			return idProducto;
		}

		public void setIdProducto(String idProducto) {
			this.idProducto = idProducto;
		}

		public String getDescripcion() {
			return descripcion;
		}

		public void setDescripcion(String descripcion) {
			this.descripcion = descripcion;
		}

		public String getImagen() {
			return imagen;
		}

		public void setImagen(String imagen) {
			this.imagen = imagen;
		}

		public double getPrecioUnidad() {
			return precioUnidad;
		}

		public void setPrecioUnidad(double precioUnidad) {
			this.precioUnidad = precioUnidad;
		}

		public int getStock() {
			return stock;
		}

		public void setStock(int stock) {
			this.stock = stock;
		}

	
}
