from flask import Flask
# from flask_sqlalchemy import SQLAlchemy

from views import *

app = Flask(__name__)


app.add_url_rule('/menu/', 'menu', menu_items)

if __name__ == '__main__':
    app.run()
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://pwqucdjl:Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x@john.db.elephantsql.com/pwqucdjl'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#
# db = SQLAlchemy(app)