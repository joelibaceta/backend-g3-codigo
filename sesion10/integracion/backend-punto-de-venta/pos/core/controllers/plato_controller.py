from rest_framework.response import Response
from rest_framework.views import APIView

from core.models import Plato

from core.serializers.plato_serializer import PlatoSerializer


class PlatoAPI(APIView):

    def get(self, request):
        platos = Plato.objects.all()

        serializer = PlatoSerializer(platos, many=True)

        return Response(
            {
                "ok": True,
                "content": serializer.data
            }
        ) 