from .models import ToDoItem
from rest_framework import serializers

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDoItem
        fields = '__all__'