from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def inicio(request):
    return HttpResponse(f"""
        <h1>Hola desde mi segunda app</h1> 
        <p>Este es un párrafo </p> 
        
        """
        )

def jobs(request):
    return HttpResponse("<h1> jobs </h1>")