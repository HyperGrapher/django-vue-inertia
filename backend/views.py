from django.shortcuts import render
from inertia import render as inertia_render

def index(request):
    return render(request, 'partials/index.html', {"data": "index-data coming from views/index"})


def app(request):
    return inertia_render(request, 'App', {'user': {'id': '1234', 'name': 'Brock', 'email': 'brock@email.com'} })


def other(request):
    return inertia_render(request, 'Other')

