from rest_framework import serializers
from .models import Todo, Task

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ['id', 'body', 'created_at', 'updated_at', 'todo']

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ['id', 'title', 'user', 'created_at', 'updated_at']
        