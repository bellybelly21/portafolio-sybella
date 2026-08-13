from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('primerapp/', include('primerapp.urls')),
    path('segundapp/', include('segundapp.urls'))
]
