from flask import render_template, request
from models import *
from utils import *


def index():
    if request.method == 'GET':
        menu = menu_data()
        images = image_urls(len(menu))
        return render_template('index.html', menu=menu, images=images)
    elif request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        comment = request.form.get('comment')
        cm = Comments(name, email, comment)
        cm.add_comment_to_db()
        return "Message received!\nThank you."
    return render_template('index.html')


def menu_items():
    menu = menu_data()
    images = image_urls(len(menu))
    print(images)
    return render_template('menu.html', menu=menu, images=images)


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


def dashboard():
    return render_template('dashboard.html')


def manager_login():
    if request.method == 'GET':
        return render_template('manager_login.html')
    elif request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username.check_username() and password.check_password():
            return render_template('dashboard.html')
        else:
            return render_template('not_valid_input.html')
    else:
        return render_template('not_valid_request.html'), 403