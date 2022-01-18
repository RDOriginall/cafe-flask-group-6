from flask import render_template, request
from models import *
from utils import *


def index():
    if request.method == 'GET':
        menu = menu_data()
        images = image_urls(max([item['id'] for item in menu]))
        categories = Category.show_categories()
        return render_template('index.html', menu=menu, images=images, categories=categories)
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
        return "Invalid Request!", 403


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
    if request.method == 'GET':
        
        return render_template('dashboard.html', )
    elif request.method == 'POST':
        return "Message received!\nThank you."

def print_reciept(reciept_id):
    if request.method == 'GET':
        list_order = order_list(reciept_id)
        total_list=recipt_to_pay(reciept_id)
        return render_template('reciept.html', order= list_order,total=total_list)
    elif request.method == 'POST':
        return "Message received!\nThank you."


def manager_login():
    if request.method == 'GET':
        return render_template('manager_login.html')
    elif request.method == 'POST':
        phone_number = request.form.get('phone_number')
        password = request.form.get('password')
        if Manager.check_phone(phone_number):
            if Manager.check_password(phone_number, password):
                m = Manager.get_by_phone(phone_number)
                data = {
                    'first_name': m.first_name,
                    'last_name': m.last_name,
                    'phone_number': m.phone_number,
                    'email': m.email,
                }
                return render_template('dashboard.html', data=data)
            else:
                return render_template('not_valid_page.html')
        else:
            return render_template('not_valid_page.html')
    else:
        return render_template('not_valid_page.html'), 403


def edit_menu_item(item_id):
    if request.method == 'GET':
        item = MenuItem.get_by_id(int(item_id))
        data = {
            'id': item_id,
            'name':item.name,
            'price':item.price,
            'discount':item.discount,
            'category': item.category_id
        }
        return render_template('edit_menu_item.html', data=data)
    elif request.method == 'POST':
        item = MenuItem.get_by_id(int(request.form.get('id')))
        item.name = str(request.form.get('name'))
        item.price = int(request.form.get('price'))
        item.discount = float(request.form.get('discount'))
        item.category_id = int(request.form.get('category'))
        item.update_database()
        return 'Item updated!', 201
    else:
        return 'Wrong request!', 403
    
def delete_menu_item():
    if request.method == 'GET':
        return render_template('delete_menu_item.html')
    elif request.method == 'POST':
        item_id = int(request.form.get('id'))
        item = MenuItem.get_by_id(item_id)
        item.delete_from_database()
        return 'Item deleted!'
    else:
        return 'Wrong request!', 403

def category():
    if request.method == 'GET':
        return render_template('category-cash.html',categorylist=category_list())
    elif request.method == 'POST':
        item_id = int(request.form.get('id'))
        item = MenuItem.get_by_id(item_id)
        item.delete_from_database()
        return 'Item deleted!'
    else:
        return 'Wrong request!', 403
    
def reciept():
    if request.method == 'GET':
        return render_template('reciept.html')
    else:
        return render_template('not_valid_page.html'), 403
    
def menu_item():
    return render_template('menu_item.html')