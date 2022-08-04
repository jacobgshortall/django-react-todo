from django.urls import path
from . import views

urlpatterns = [
    path('get_list/', views.get_list, name='get_list'),
    path('add_item/', views.add_item, name='add_item'),
    path('delete_item/<int:id>/', views.delete_item, name='delete_item'),
]