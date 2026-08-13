from django.urls import path
from segundapp import views as s

urlpatterns = [
    path('inicio/', s.inicio),
    path('jobs/', s.jobs)
]
