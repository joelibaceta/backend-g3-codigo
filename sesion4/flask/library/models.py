from sqlalchemy.orm import relationship

from app import db

class Book(db.Model):
    idBook = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    autor = db.Column(db.String(45))
    year = db.Column(db.Integer)
    idCategory = db.Column(db.Integer, db.ForeignKey('category.idCategory'))
    category = relationship("Category", back_populates="books")

    @property
    def category_name(self):
        return str(self.category)

class Category(db.Model):
    idCategory = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45))
    books = relationship("Book", back_populates="category")

    def __str__(self):
        return self.name

