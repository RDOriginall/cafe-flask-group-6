from flask import render_template, request
from models import *

def index():
    return render_template('index.html')

def menu_items():
    # How to get menu from database
    menu = [
        {'name': 'Tea', 'price': '10', 'category': 'breakfast'},
        {'name': 'Cafe', 'price': '20', 'category': 'brunch'},
        {'name': 'Pizza', 'price': '85', 'category': 'dinner'},
        {'name': 'macarooni', 'price': '25', 'category': 'dinner'},
        {'name': 'Chicken noodle', 'price': '35', 'category': 'lunch'},
        {'name': 'Pizza Pepperooni', 'price': '65', 'category': 'dinner'}
    ]
    return render_template('menu.html', menu=menu)

def add_manager():
    if request.method == 'GET':
        return render_template('add_manager.html')
    elif request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        phone_number = request.form.get('phone_number')
        email = request.form.get('email')
        password = request.form.get('password')
        m = Manager(first_name, last_name, phone_number, email, password)
        m.add_to_database()
        return 'OkaY!'
    else:
        return 'Not Valid request!', 403