from rest_framework import serializers, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from core.models import Post
from core.serializers import PostSerializer, PostModelSerializer

from rest_framework.permissions import AllowAny, IsAuthenticated
 


class PostViewSet(viewsets.ViewSet):
    permission_classes = (AllowAny, )
    
    def list(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def create(self, request):
        if request.user.is_anonymous:
            return Response({"status": "no autorizado"}, status=status.HTTP_401_UNAUTHORIZED)
        # Obtener el payload json del request
        data = request.data
        # Instanciar el serializador de Posts
        # Asignarle como data el valor del payload json obtenido
        # en el paso anterior
        serializer = PostSerializer(data=data)
        # Validar la estructura del payload y sus datos
        if serializer.is_valid():
            # Registrar el nuevo Post
            new_post=Post(**data)
            new_post.save()
            # Retornar la confirmacion de creacion
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            # Retornar el detalle el error
            return Response({
                "errors": serializer.errors
            })
        

    def retrieve(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def update(self, request, pk=None):
        post = Post.objects.filter(pk=pk)
        data = request.data
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            post = post.update(**data)
            return Response(serializer.data, status.HTTP_200_OK)
        else:
            # Retornar el detalle el error
            return Response({
                "errors": serializer.errors
            })

    def destroy(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        post.delete()
        return Response({"status": "Deleted"}, status.HTTP_200_OK)


class PostModelViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostModelSerializer
    #permission_class = IsAuthenticated

