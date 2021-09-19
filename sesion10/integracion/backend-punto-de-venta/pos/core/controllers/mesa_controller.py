from rest_framework import serializers
from core.serializers.mesa_serializer import MesaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from core.models import Mesa

class MesaAPI(APIView):

    def get(self, request):
        mesas = Mesa.objects.all()
        serializer = MesaSerializer(mesas, many=True)

        return Response(
            {
                "ok": True,
                "content": serializer.data
            }
        )

    def post(self, request):
        data = request.data
        serializer = MesaSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "ok": True
            })
        else:
            return Response({
                "errors": serializer.errors
            })

    def put(self, request, pk=None):
        data =request.data
        mesa = Mesa.objects.filter(pk=pk)
        serializer = MesaSerializer(data=data)
        if serializer.is_valid():
            mesa.update(**serializer.validated_data)
            return Response({
                "ok": True
            })
        else:
            return Response({
                "errors": serializer.errors
            })

    def delete(self, request, pk=None):
        mesa = Mesa.objects.filter(pk=pk)
        mesa.delete()

        return Response({
            "ok": True
        })
        

