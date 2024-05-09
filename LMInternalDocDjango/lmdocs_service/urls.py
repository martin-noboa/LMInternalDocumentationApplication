from django.urls import path 
from . import views
  
urlpatterns = [ 
    path("", views.test, {'filename': 'index.md'}, name="index"),
    path("test/", views.test, {'filename': 'test.md'}, name="test"),
]