from models import Manager
import argparse


parser = argparse.ArgumentParser(description="Press -n to start!")
parser.add_argument("-n", "--name", nargs="+", required=True, help="Insert -n or --name to write your name!")

args = parser.parse_args()

