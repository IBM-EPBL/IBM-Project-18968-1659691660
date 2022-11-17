from __future__ import division, print_function

import os

import numpy as np
import tensorflow as tf
from flask import Flask, redirect, render_template, request
from keras.applications.inception_v3 import preprocess_input
from keras.models import model_from_json
from werkzeug.utils import secure_filename

global graph
graph=tf.compat.v1.get_default_graph()
#this list is used to log the predictions in the server console
predictions = [
               "Seneca White Deer",
               "Spoon Billed Sandpiper", 
               "Pangolin", 
               "Lady's slipper orchid", 
               "Great Indian Bustard", 
               "Corpse Flower", 
              ]
#this list contains the link to the predicted species              
found = [
        "https://en.wikipedia.org/wiki/Seneca_white_deer",
        "https://en.wikipedia.org/wiki/Spoon-billed_sandpiper",
        "https://en.wikipedia.org/wiki/Pangolin",
        "https://en.wikipedia.org/wiki/Amorphophallus_titanum",
        "https://en.wikipedia.org/wiki/Great_Indian_bustard",
        "https://en.wikipedia.org/wiki/Cypripedioideae",
        ]
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")
@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'GET':
        return ("<h6 style=\"font-face:\"Courier New\";\">No GET request herd.....</h6 >")
    if request.method == 'POST':
        upload_img_file = request.files['uploadedimg']
        basepath = os.path.dirname(__file__)
        # file_path = os.path.join(basepath, 'uploads', secure_filename(upload_img_file.filename))
        file_path=r'upload_img_file'
        upload_img_file.save(file_path)
        img = tf.keras.utils.load_img(file_path, target_size=(224, 224))
        x = tf.keras.utils.img_to_array(img)
        x = preprocess_input(x)
        inp = np.array([x])
        with graph.as_default():
            #loading the saved model from training
            json_file = open('DigitalNaturalist.json', 'r')
            loaded_model_json = json_file.read()
            json_file.close()
            loaded_model = model_from_json(loaded_model_json)
            loaded_model.load_weights("DigitalNaturalist.h5")
            preds =  np.argmax(loaded_model.predict(inp),axis=1)
            print("Predicted the Species " + str(predictions[preds[0]]))
        text = found[preds[0]]
        return redirect(text)



if __name__ == '__main__':
    #application is binded to port 8000
    app.run(threaded = True,debug=True,port="8000")
