from rest_framework import serializers
from core.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name','email','username')


class UserShortSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username')
