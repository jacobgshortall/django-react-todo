from rest_framework import generics
from .models import ToDoItem
from .serializers import ToDoSerializer


class ToDoList(generics.ListCreateAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoSerializer


class ToDoUpdate(generics.UpdateAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoSerializer


class ToDoDelete(generics.DestroyAPIView):
    queryset = ToDoItem.objects.all()
    serializer_class = ToDoSerializer
