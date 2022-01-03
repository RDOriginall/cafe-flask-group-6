from flask import render_template, request
from models import *
from utils import *


def index():
    return render_template('index.html')


def menu_items():
    menu = menu_data()
    # How to get menu from database
    # menu = [
    #     {'name': 'Tea', 'price': '10', 'category': 'breakfast'},
    #     {'name': 'Cafe', 'price': '20', 'category': 'brunch'},
    #     {'name': 'Pizza', 'price': '85', 'category': 'dinner'},
    #     {'name': 'macarooni', 'price': '25', 'category': 'dinner'},
    #     {'name': 'Chicken noodle', 'price': '35', 'category': 'lunch'},
    #     {'name': 'Pizza Pepperooni', 'price': '65', 'category': 'dinner'}
    # ]
    return render_template('menu.html', menu=menu)


def add_menu_items():
    if request.method == 'GET':
        return render_template('add_menu.html')
    elif request.method == 'POST':
        name = request.form.get('name')
        price = request.form.get('price')
        discount = request.form.get('discount')
        category_id = request.form.get('category_id')
        manager_id = request.form.get('manager_id')
        item = MenuItem(name, price, discount, category_id, manager_id)
        item.add_to_database()
        return 'successful!\nItem added to menu.'
    else:
        return "Invalid Request!"


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
