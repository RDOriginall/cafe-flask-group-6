import psycopg2


class Manager:

    def __init__(self, first_name, last_name, phone_number, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.password = password

    # database
    def add_to_database(self):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "INSERT INTO manager(first_name, last_name, phone_number, email, password) VALUES (%s,%s,%s,%s,%s);"
                    , (self.first_name, self.last_name, self.phone_number, self.email, self.password))
        conn.close()


class MenuItem:
    def __init__(self, name, price, discount, category_id, manager_id) -> None:
        self.name = name
        self.price = price
        self.discount = discount
        self.category_id = category_id
        self.manager_id = manager_id

    def add_to_database(self):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        with conn:
            with conn.cursor() as curs:
                curs.execute(
                    "INSERT INTO menu_item(name, price, discount, category_id, manager_id) VALUES (%s,%s,%s,%s,%s);"
                    , (self.name, self.price, self.discount, self.category_id, self.manager_id))
        conn.close()
