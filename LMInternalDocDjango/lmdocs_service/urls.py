from django.urls import path 
from . import views
  
urlpatterns = [ 
    path("", views.renderMarkdown, {'filename': 'index.md'}, name="index"),
    path("test/", views.renderMarkdown, {'filename': 'test.md'}, name="test"),
]