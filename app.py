from flask import Flask
from views import *

app = Flask(__name__)

app.add_url_rule('/', 'index', index, methods=['GET', 'POST'])
app.add_url_rule('/manager/', 'add_manager', add_manager, methods=['GET', 'POST'])
app.add_url_rule('/menu/', 'menu', menu_items)
app.add_url_rule('/add_menu_item/', 'add_menu_item', add_menu_items, methods=['GET', 'POST'])
app.add_url_rule('/cashier/dashboard', 'dashboard', dashboard)
app.add_url_rule('/cashier/sign_in', 'add_manager', add_manager, methods=['POST'])
app.add_url_rule('/cashier/login', 'manager_login', manager_login, methods=['GET', 'POST'])


if __name__ == '__main__':
    app.run(debug=True)
