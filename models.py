import psycopg2


class Manager:
    def __init__(self, first_name, last_name, phone_number, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.password = password

    def add_to_database(self):
        conn = psycopg2.connect(dbname="pwqucdjl", user="pwqucdjl", password="Q4RNLRzY-lbffdzIJ7hTgxSC2yg7hQ9x",
                                host='john.db.elephantsql.com', port='5432')
        cur = conn.cursor()
        cur.execute("""
        INSERT INTO manager (first_name, last_name, phone_number, email, password)
        VALUES (%s, %s, %s, %s, %s);
        """, ('amir','asli','09112349329','hi@pi.my','1'))
        cur.close()
