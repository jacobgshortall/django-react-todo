from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ToDoItem
from .serializers import ToDoSerializer


@api_view(['GET'])
def get_list(request):
    items = ToDoItem.objects.all()
    serializer = ToDoSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_item(request):
    serializer = ToDoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)


@api_view(['DELETE'])
def delete_item(request, id):
    item = ToDoItem.objects.get(pk=id)
    item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)