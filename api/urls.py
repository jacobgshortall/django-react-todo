from django.urls import path
from . import views

urlpatterns = [
    path('delete_item/<int:pk>/', views.ToDoDelete.as_view(), name='delete_item'),
    path('todo_list/', views.ToDoList.as_view(), name='todo_list'),
]
