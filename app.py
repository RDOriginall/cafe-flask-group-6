from flask import Flask
from views import *

app = Flask(__name__)

app.add_url_rule('/', 'index', index, methods=['GET', 'POST'])
# app.add_url_rule('/manager/', 'add_manager', add_manager, methods=['GET', 'POST'])
app.add_url_rule('/menu/', 'menu', menu_items)
app.add_url_rule('/add_menu_item/', 'add_menu_item', add_menu_items, methods=['GET', 'POST'])
app.add_url_rule('/cashier/reciept/<reciept_id>', 'print_reciept', print_reciept, methods=['GET', 'POST'])
app.add_url_rule('/edit_menu_item/<item_id>', 'edit_menu_item', edit_menu_item, methods=['GET', 'POST'])
app.add_url_rule('/edit_menu_item/', 'edit_menu_item', edit_menu_item, defaults={'item_id':1}, methods=['GET', 'POST'])
app.add_url_rule('/cashier/dashboard', 'dashboard', dashboard)
app.add_url_rule('/cashier/sign_in', 'add_manager', add_manager, methods=['POST'])
app.add_url_rule('/delete_menu_item/', 'delete_menu_item', delete_menu_item, methods=['GET', 'POST'])
app.add_url_rule('/cashier/login', 'manager_login', manager_login, methods=['GET', 'POST'])
# new
app.add_url_rule('/comment/', 'comment', comment, methods=['POST'])
app.add_url_rule('/add_order/', 'add_order', add_order, methods=['POST'])
app.add_url_rule('/get_tables/', 'get_tables', get_tables, methods=['GET'])


if __name__ == '__main__':
    app.run(debug=True)

