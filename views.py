from flask import render_template


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
