import psycopg2


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
                obj = cls(*curs.fetchone())
        conn.close()
        return obj

    @staticmethod
    def start_database():
        return psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')


    def delete_from_db(self): # deleting a manager
        conn = Manager.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("DELETE FROM manager WHERE manager.id = %s;", (self.manager_id))
        conn.close()
        
        
    def edit_in_db(self, first_name, last_name, phone_number, email, password): # edit a manager's information
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
                            (self.first_name, self.last_name, self.phone_number, self.email, self.__password, self.manager_id))
        conn.close()
        
        

class MenuItem:
    def __init__(self, name, price, discount, category_id, manager_id) -> None:
        self.name = name
        self.price = price
        self.discount = discount
        self.category_id = category_id
        self.manager_id = manager_id

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
                    "UPDATE menu_item SET name = %s, price = %s, discount = %s, category_id = %s, manager_id = %s) WHERE menu_item.id = %s;"
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
    def get_by_id(cls, obj_id):
        conn = cls.start_database()
        with conn:
            with conn.cursor() as curs:
                curs.execute("SELECT * FROM menu_item WHERE manager.id = %s;", (obj_id,))
                obj = cls(*curs.fetchone())
        conn.close()
        return obj

    @staticmethod
    def start_database():
        return psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')


class OrderList:
    def __init__(self, menu_item_id, number, reciept_id, manager_id):
        self.menu_item = MenuItem.get_by_id(menu_item_id)
        self.number = number
        self.reciept_id = reciept_id  # Reciept.get_by_id(reciept_id)
        self.manager_id = manager_id
        self.status = 'cooking'

    def set_status(self):
        pass  # TODO

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
        self.table_id = table_id
        
    def add_to_db(self): # add a table
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x", host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("INSERT INTO table VALUES (default);")
                curs.execute("SELECT * FROM table;")
                self.table_id = curs.fetchall()[-1][0]
        conn.close()

    def delete_from_db(self): # delete a table
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x", host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute("DELETE FROM manager WHERE table.id = %s;", (self.table_id))
        conn.close()