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
        list_not_pay = recipt_not_pay()
        return render_template('dashboard.html', list_not_pay=list_not_pay)
    elif request.method == 'POST':
        return "Message received!\nThank you."


def print_reciept(reciept_id):
    if request.method == 'GET':
        list_order = order_list(reciept_id)
        total_list = recipt_to_pay(reciept_id)
        return render_template('reciept.html', order=list_order, total=total_list)
    elif request.method == 'POST':
        return "Message received!\nThank you."


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


def edit_menu_item(item_id):
    if request.method == 'GET':
        item = MenuItem.get_by_id(int(item_id))
        data = {
            'id': item_id,
            'name': item.name,
            'price': item.price,
            'discount': item.discount,
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


def comment():
    if request.method == 'POST':
        name = request.form['name']
        comment_text = request.form['comment']
        email = request.form['email']
        comment_obj = Comments(name, email, comment_text)
        comment_obj.add_comment_to_db()
        return f'Thank you {name} for your comment'
    else:
        return 'Wrong request!', 403


def add_order():
    if request.method == 'POST':
        items_data = dict(request.form)
        table_id = 2
        manager_id = 1
        receipt = Reciept(table_id, manager_id)
        for item_id in items_data.keys():
            if item_id.isdigit():
                menu_item = MenuItem.get_by_id(item_id)
                receipt.price += menu_item.price * int(items_data[item_id])
                receipt.final_price += int(menu_item.price * (100 - menu_item.discount) / 100) * int(
                    items_data[item_id])
        receipt.add_to_db()
        for item_id in items_data.keys():
            order = OrderList(item_id, items_data[item_id], receipt.reciept_id, manager_id)
            order.add_to_database()
        return "Order added successfully!"
    else:
        return 'Wrong request!', 403


def get_tables():
    if request.method == 'GET':
        tables = Table.get_all_tables()
        print(tables)
        return tables
    else:
        return 'Wrong request!', 403
