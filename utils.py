from models import *


def menu_data():
    conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                            host='john.db.elephantsql.com', port='5432')
    with conn:
        with conn.cursor() as curs:
            curs.execute("SELECT * FROM menu_item;")
            menu_list = curs.fetchall()
    conn.close()
    menu = []
    for item in menu_list:
        menu.append({'id': item[0], 'name': item[1], 'price': item[2], 'category': item[4]})
    return menu


def image_urls(n):
    urls = []
    for i in range(1, n + 2):
        urls.append(f"https://picsum.photos/200/200?random={i}")
    return urls
