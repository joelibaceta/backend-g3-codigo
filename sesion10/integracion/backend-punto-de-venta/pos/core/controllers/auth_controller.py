from django.contrib import auth
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["usu_tipo"] = user.usu_tipo
        return token

class LoginAPI(APIView):

    def post(self, request):
        data = request.data

        email = data["correo"]
        password = data["password"]

        user = User.objects.filter(email__exact=email).first()
        user_authenticated = authenticate(username=user.username, password=password)

        if user_authenticated != None:

            #token = RefreshToken.for_user(user_authenticated)
            token = CustomObtainPairSerializer.get_token(user_authenticated)

            return Response({
                'ok': True,
                'token': str(token.access_token)
            })

        return HttpResponse("Error")