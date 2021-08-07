from app import ma

class CategorySchema(ma.Schema):
    class Meta:
        fields = ("idCategory", "name")

    

class BookSchema(ma.Schema):
    class Meta:
        fields = ("idBook", "title", "autor", "year", "category_name")

    #category = ma.Nested(CategorySchema)