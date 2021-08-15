from inspect import ClassFoundException
from core.models import Post
from rest_framework import serializers


class PostSerializer(serializers.Serializer):
    content = serializers.CharField()
    created_at = serializers.DateTimeField(required=False)
    updated_at = serializers.DateTimeField(required=False)

class PostModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['content', 'created_at', 'updated_at']