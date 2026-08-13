from django.shortcuts import render
from django.http import HttpResponse
import datetime

alerta = "hola como estas"
# Create your views here.
def inicio(request):
    return HttpResponse(f"""
    <h1>Hola desde mi primera app</h1> 
    <p>Hola que pasa </p> 
    <button onclick="alert('{alerta}')">Apretame </button>
    
    """
    )

def ahora(request):
    hora = datetime.datetime.now()
    salida = "<h2>fecha y hora: {} </h2>".format(hora)
    return HttpResponse(salida)