from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ToDoItem
from .serializers import ToDoSerializer

@csrf_exempt 
@api_view(['GET'])
def get_list(request):
    items = ToDoItem.objects.all()
    serializer = ToDoSerializer(items, many=True)
    return Response(serializer.data)
