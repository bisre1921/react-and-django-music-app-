from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('' , views.RoomView.as_view()),
    path('create-room', views.CreateRoomView.as_view())
]
