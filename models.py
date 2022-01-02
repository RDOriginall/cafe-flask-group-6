import psycopg2


class Manager:
    managers = [
        {
            "id": 1,
            "first_name": "Akbar",
            "last_name": "Babaii",
            "phone_number": "09123456789",
            "email": "akbarbabaii@gmail.com",
            "password": "Akbarthegreat1400"
        },
        {
            "id": 2,
            "first_name": "Mamad",
            "last_name": "Kabiri",
            "phone_number": "09987654321",
            "email": "kabire.mamad@yahoo.com",
            "password": "kouroshKabir1"
        },
        {
            "id": 3,
            "first_name": "Sara",
            "last_name": "Aghdasi",
            "phone_number": "09111111111",
            "email": "sara.agh@yahoo.com",
            "password": "password123456"
        },
        {
            "id": 4,
            "first_name": "saeed",
            "last_name": "abasi",
            "phone_number": "0937471008",
            "email": "saeed.abasi@gmail.com",
            "password": "zxc123456"
        },
        {
            "id": 5,
            "first_name": "reza",
            "last_name": "abasi",
            "phone_number": "09374500876",
            "email": "rezadabaghi@gmail.com",
            "password": "12345"
        }
    ]

    def __init__(self, first_name, last_name, phone_number, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.password = password

    def add_to_database(self):
        self.managers.append({
            "id": len(Manager.managers) + 1,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "email": self.email,
            "password": self.password
        })

