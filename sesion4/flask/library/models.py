from sqlalchemy.orm import relationship

from app import db

class Book(db.Model):
    idBook = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    autor = db.Column(db.String(45))
    year = db.Column(db.Integer)
    idCategory = db.Column(db.Integer, db.ForeignKey('Category.idCategory'))
    category = relationship("Category", back_populates="books")

class Category(db.Model):
    idCategoria = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45))
    books = relationship("Book", back_populates="category")

