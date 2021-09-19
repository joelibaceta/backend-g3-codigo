from rest_framework import serializers

class CategoriaSerializer(serializers.Serializer):
    categoria_nom =serializers.CharField(max_length=50)

class PlatoSerializer(serializers.Serializer):

    plato_id = serializers.SerializerMethodField('get_id')
    plato_nom = serializers.CharField(max_length=50)
    plato_img = serializers.SerializerMethodField('get_img')
    plato_pre = serializers.CharField(max_length=50)
    Categorium = serializers.SerializerMethodField('get_categorium')

    def get_id(self, obj):
        return obj.id

    def get_categorium(self, obj):
        serializer = CategoriaSerializer(obj.categoria)
        return serializer.data

    def get_img(self, obj):
        return "http://localhost:8000/assets/" + str(obj.plato_img)