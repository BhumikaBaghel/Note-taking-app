from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Item,CustomUser

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id','email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)


class LoginOTPSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()