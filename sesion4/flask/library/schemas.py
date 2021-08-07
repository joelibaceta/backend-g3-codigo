from app import ma

class CategorySchema(ma.Schema):
    class Meta:
        fields = ("idCategory", "name")