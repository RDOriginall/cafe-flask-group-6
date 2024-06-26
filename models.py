import psycopg2
from datetime import datetime


class Manager:
    def __init__(self, first_name, last_name, phone_number, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.password = password

    def add_to_database(self):
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "INSERT INTO manager(first_name, last_name, phone_number, email, password) VALUES (%s,%s,%s,%s,%s);"
                    , (self.first_name, self.last_name, self.phone_number, self.email, self.password))
                # finding id of instance
                curs.execute("SELECT * FROM manager;")
                self.manager_id = curs.fetchall()[-1][0]
        conn.close()  # logging

    @classmethod
    def get_by_id(cls, obj_id):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM manager WHERE manager.id = %s;", (obj_id,))
                data = curs.fetchone()
                obj = cls(data[1], data[2], data[3], data[4], data[5])
        conn.close()
        return obj

    @staticmethod
    def start_database():
        return psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')

    def delete_from_db(self):  # deleting a manager
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("DELETE FROM manager WHERE manager.id = %s;", (self.manager_id))
        conn.close()

    def edit_in_db(self):  # edit a manager's information
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("""
                             UPDATE manager 
                             SET first_name = %s,
                                 last_name = %s,
                                 phone_number = %s,
                                 email = %s,
                                 password = %s,
                                 WHERE manager.id = %s;
                             """,
                             (self.first_name, self.last_name, self.phone_number, self.email, self.__password,
                              self.manager_id))
        conn.close()

    @classmethod
    def check_phone(cls, phone):
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT phone_number FROM manager;")
                all_phones = curs.fetchall()
        conn.close()
        if phone in [item[0] for item in all_phones]:
            return True
        else:
            return False

    @classmethod
    def check_password(cls, phone, password):
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT password FROM manager where manager.phone_number = %s;", (phone, ))
                target_password = curs.fetchone()
        conn.close()
        if password == target_password[0]:
            return True
        else:
            return False

    @classmethod
    def get_by_phone(cls, phone_number):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM manager WHERE manager.phone_number = %s;", (phone_number,))
                data = curs.fetchone()
                obj = cls(data[1], data[2], data[3], data[4], data[5])
        conn.close()
        return obj
        

class MenuItem:
    def __init__(self, name, price, discount, category_id, manager_id) -> None:
        self.name = name
        self.price = price
        self.discount = discount
        self.category_id = category_id
        self.manager_id = manager_id

    def get_prices(self):
        return self.price, self.price * (self.discount / 100)

    def add_to_database(self):
        conn = MenuItem.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "INSERT INTO menu_item(name, price, discount, category_id, manager_id) VALUES (%s,%s,%s,%s,%s);"
                    , (self.name, self.price, self.discount, self.category_id, self.manager_id))
                # finding id of instance
                curs.execute("SELECT * FROM menu_item;")
                self.id = curs.fetchall()[-1][0]
        conn.close()
        # logging

    def update_database(self):
        conn = MenuItem.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "UPDATE menu_item SET name = %s, price = %s, discount = %s, category_id = %s, manager_id = %s WHERE menu_item.id = %s;"
                    , (self.name, self.price, self.discount, self.category_id, self.manager_id, self.id))
        conn.close()
        # logging

    def delete_from_database(self):
        conn = MenuItem.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "DELETE FROM menu_item WHERE menu_item.id = %s;", (self.id,))
        conn.close()
        # logging

    @classmethod
    def get_all_items(cls):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM menu_item;")
                data = curs.fetchall()
        conn.close()
        return data

    @classmethod
    def get_by_id(cls, obj_id):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM menu_item WHERE menu_item.id = %s;", (obj_id,))
                data = curs.fetchone()
                obj = cls(data[1], data[2], data[3], data[4], data[5])
                obj.id = obj_id
        conn.close()
        return obj

    @staticmethod
    def start_database():
        return psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')


class OrderList:
    def __init__(self, menu_item_id, number, reciept_id, manager_id):
        self.menu_item_id = menu_item_id
        self.menu_item = MenuItem.get_by_id(menu_item_id)
        self.number = number
        self.reciept_id = reciept_id  # Reciept.get_by_id(reciept_id)
        self.manager_id = manager_id
        self.status = 1  # {1: 'cooking', 2: 'ready', 3:'served'}

    def set_status(self):
        pass  # TODO

    def add_to_database(self):
        conn = OrderList.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "INSERT INTO order_list (menu_item_id, number, reciept_id, manager_id, status) VALUES (%s, %s, %s, %s, %s);",
                    (self.menu_item_id, self.number, self.reciept_id, self.manager_id, self.status))
                # finding id of instance
                curs.execute("SELECT * FROM order_list;")
                self.id = curs.fetchall()[-1][0]
        conn.close()

    @classmethod
    def get_by_id(cls, obj_id):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM order_list WHERE manager.id = %s;", (obj_id,))
                obj = cls(*curs.fetchone())  # TODO It's Wrong, Make it write.
        conn.close()
        return obj

    @staticmethod
    def start_database():
        return psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')


class Table():
    def __init__(self):
        # self.table_id = table_id
        pass

    def add_to_db(self):  # add a table
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("INSERT INTO table VALUES (default);")
                curs.execute("SELECT * FROM table;")
                self.table_id = curs.fetchall()[-1][0]
        conn.close()

    def delete_from_db(self):  # delete a table
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("DELETE FROM manager WHERE table.id = %s;", (self.table_id))
        conn.close()

    @classmethod
    def get_all_tables(cls):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM tables;")
                tables = curs.fetchall()
        conn.close()
        return [table[0] for table in tables]

    @classmethod
    def get_free_tables(cls):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM reciept;")
                reciepts = curs.fetchall()
        conn.close()
        tables = cls.get_all_tables()
        for item in reciepts:
            if item[4] == False:
                table_id = item[1]
                if table_id in tables:
                    tables.remove(table_id)
        return tables


class Category:
    def __init__(self, name):
        self.name = name

    def add_to_db(self):  # adding to db category
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("insert into category(name) values (%s); ", (self.name,))
                curs.execute("select * from category;")
                self.category_id = curs.fetchall()[-1][0]
        conn.close()

    def delete_from_db(self):  # delete from db
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("delete from category where category.id= %s; ", (self.category_id,))
        conn.close()

    @staticmethod
    def delete_from_db_by_id(id: int):  # delete from db by id
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("delete from category where category.id= %s; ", (id,))
        conn.close()

    @staticmethod
    def edit_category(id, name):  # edit
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("UPDATE category SET name = %s WHERE category.id = %s;", (name, id,))
        conn.close()

    @staticmethod
    def show_categories():  # show all category
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM category;")
                list_category = curs.fetchall()
        return list_category


class Reciept:
    def __init__(self, table_id, manger_id):
        self.table_id = table_id
        self.manger_id = manger_id
        self.price = 0
        self.final_price = 0

    def add_to_db(self):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "insert into reciept(table_id,price,final_price,status,manager_id,reciept_time) values (%s,%s,%s,%s,%s,%s); ",
                    (self.table_id, self.price, self.final_price, False, self.manger_id, datetime.now(),))
                curs.execute("select * from reciept;")
                self.reciept_id = curs.fetchall()[-1][0]
        conn.close()
        return self.reciept_id

    @staticmethod
    def reciept_all(table_id, off=1):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("select id from reciept where table_id=%s and status=FALSE; ", (table_id,))
                list_id = curs.fetchall()
        price = Reciept.order_check(list_id[0][0])
        final_price = price * off
        with conn:
            with conn.cursor() as curs:
                curs.execute("UPDATE reciept SET price = %s , final_price=%s WHERE table_id = %s  and status=FALSE;",
                             (price, final_price, table_id))
        with conn:
            with conn.cursor() as curs:
                curs.execute("select * from reciept where table_id=%s and status=FALSE; ", (table_id,))
                reciept = curs.fetchall()
        conn.close()
        return reciept

    @staticmethod
    def reciept_all_id(reciept_id, off=1):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        price = Reciept.order_check(reciept_id)
        final_price = price * off
        with conn:
            with conn.cursor() as curs:
                curs.execute("UPDATE reciept SET price = %s , final_price=%s WHERE id = %s ;",
                             (price, final_price, reciept_id))
        with conn:
            with conn.cursor() as curs:
                curs.execute("select * from reciept where id=%s ; ", (reciept_id,))
                reciept = curs.fetchall()
        conn.close()
        return reciept

    @staticmethod
    def pay(table_id):  # pay status true
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("UPDATE reciept SET status = TRUE WHERE table_id = %s  and status=FALSE; ", (table_id,))
        conn.close()

    @staticmethod
    def order_check(reciept_id):
        price = 0
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "select price p,(select number from order_list o where o.menu_item_id = m.id and reciept_id=%s ) as tedad from menu_item m where m.id IN (select menu_item_id from order_list where reciept_id=%s);",
                    (reciept_id, reciept_id,))
                list_id = curs.fetchall()
        for x in list_id:
            price += x[0] * x[1]
        conn.close()
        return price

    @staticmethod
    def order_send(reciept_id):
        price = 0
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "select name n,price p,(select number from order_list o where o.menu_item_id = m.id and reciept_id=%s ) as tedad from menu_item m where m.id IN (select menu_item_id from order_list where reciept_id=%s);",
                    (reciept_id, reciept_id,))
                list_id = curs.fetchall()
        conn.close()
        return list_id


class Comments:
    def __init__(self, name, email, comment):
        self.name = name
        self.email = email
        self.comment = comment

    def add_comment_to_db(self):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')

        with conn:
            with conn.cursor() as curs:
                curs.execute("INSERT INTO comments (name, email, comment) VALUES (%s, %s, %s);"
                             , (self.name, self.email, self.comment))
        conn.close()
