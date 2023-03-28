from django.urls import path
from .views import homeAPI, getTodo, getTask

urlpatterns = [
    path('sample/', homeAPI, name='sample'),

    path('source/', getTodo, name='todo-list' ),
    path('task/', getTask, name='task-list' ),
]