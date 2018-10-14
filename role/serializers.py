from rest_framework import serializers
from role.models import Role


class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = ('title', 'created_at','id', 'is_deleted')