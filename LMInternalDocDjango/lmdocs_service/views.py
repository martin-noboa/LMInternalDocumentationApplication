from django.http import HttpResponse
from django.shortcuts import render 
from rest_framework.views import APIView 
from rest_framework.response import Response


def index(request):
    return HttpResponse("Hello, world. You're at the markdown index.")

def test(request):
    return HttpResponse("Hello, nomo. This is the API content.")

