from django.urls import path
from primerapp import views as p

urlpatterns = [
    path('inicio/', p.inicio),
    path('ahora/', p.ahora),
]
