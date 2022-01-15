from models import Manager
import argparse


parser = argparse.ArgumentParser(description="Press -n to start!")
parser.add_argument("-fn", "--fname", nargs="+", required=True, help="Insert -fn or --fname to write your first name!")
parser.add_argument("-ln", "--lname", nargs="+", required=True, help="Insert -ln or --lname to write your last name!")
parser.add_argument("-ph", "--phone", nargs="+", required=True, help="Insert -ph or --phone to write your phone number!")
parser.add_argument("-e", "--email", nargs="+", required=True, help="Insert -e or --email to write your email address!")
parser.add_argument("-p", "--password", nargs="+", required=True, help="Insert -p or --password to write your password!")

args = parser.parse_args()

