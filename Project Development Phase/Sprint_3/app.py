from __future__ import division, print_function

import os

from flask import Flask, redirect, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")


if __name__ == '__main__':
    #application is binded to port 8000
    app.run(threaded = True,debug=True,port="8000")
