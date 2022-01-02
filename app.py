from flask import Flask
# from flask_sqlalchemy import SQLAlchemy

from views import *

app = Flask(__name__)

app.add_url_rule('/', 'index', index)
app.add_url_rule('/manager/', 'add_manager', add_manager, methods=['GET', 'POST'])
app.add_url_rule('/menu/', 'menu', menu_items)

if __name__ == '__main__':
    app.run()

