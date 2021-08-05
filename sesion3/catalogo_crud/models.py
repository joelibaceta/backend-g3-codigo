
from sqlalchemy.orm import relationship

from app import db

class Producto(db.Model):
    """Representacion logica de la tabla Producto"""
    #__tablename__ = "producto"
    idProducto  = db.Column(db.Integer, primary_key = True)
    nombre      = db.Column(db.String(45))
    descripcion = db.Column(db.String(255))
    precio      = db.Column(db.Float)
    sku         = db.Column(db.String(45))
    idCategoria = db.Column(db.Integer, db.ForeignKey('categoria.idCategoria'))
    categoria   = relationship("Categoria", back_populates="products")

class Categoria(db.Model):
    idCategoria = db.Column(db.Integer, primary_key = True)
    nombre      = db.Column(db.String(45))
    products    = relationship("Producto", back_populates="categoria")

