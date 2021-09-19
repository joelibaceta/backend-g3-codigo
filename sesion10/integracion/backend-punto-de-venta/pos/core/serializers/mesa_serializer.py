from rest_framework import serializers

from core.models import Mesa

class MesaSerializer(serializers.Serializer):

    mesa_id = serializers.SerializerMethodField('get_id')
    mesa_nro = serializers.IntegerField()
    mesa_cap = serializers.IntegerField()

    def get_id(self, obj):
        return obj.id

    def save(self):
        validated_data = self.validated_data
        mesa = Mesa.objects.create(**validated_data)
        return mesa