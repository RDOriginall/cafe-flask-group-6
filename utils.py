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
        urls.append(f"https://picsum.photos/200/100?random={i}")
    return urls


def recipt_not_pay():
    conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                            host='john.db.elephantsql.com', port='5432')
    with conn:
        with conn.cursor() as curs:
            curs.execute("SELECT id,table_id FROM reciept r where r.status=FALSE;")
            list_not_pay = curs.fetchall()
    conn.close()
    list = []
    for x in list_not_pay:
        list.append({'id_recipt': x[0], 'table_id': x[1]})
    return list


def recipt_to_pay(recipt_id):
    list_order = Reciept.reciept_all_id(recipt_id)
    list = []
    for x in list_order:
        list.append({'table_id': x[1], 'price': x[2], 'final_price': x[3]})
    return list


def order_list(recipt_id):
    list_order = Reciept.order_send(recipt_id)
    list = []
    for x in list_order:
        list.append({'name': x[0], 'price': x[1], 'number': x[2], 'total': x[1] * x[2]})
    return list
