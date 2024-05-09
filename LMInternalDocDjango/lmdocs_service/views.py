from django.http import HttpResponse
from django.shortcuts import render 
from rest_framework.views import APIView 
from rest_framework.response import Response
import markdown
import os

def renderMarkdown(request,filename):
    directory_path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        'media',
        'markdown'
    )

    # Construct the full path to the requested file
    file_path = os.path.join(directory_path, filename)
    if os.path.isfile(file_path):
        # Read the file content
        with open(file_path, 'r') as file:
            file_content = file.read()
    else:
        return HttpResponse("File not found", status=404)
    html_content = markdown.markdown(file_content)
    response = HttpResponse(html_content)
    return response