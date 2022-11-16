from __future__ import print_function


from __future__ import division

import os

import numpy as np
import tensorflow as tf
from PIL import Image
from flask import Flask, redirect, render_template, request
from keras.applications.inception_v3 import preprocess_input
from keras.models import model_from_json, load_model
from werkzeug.utils import secure_filename
from keras.preprocessing import image

global graph
graph=tf.compat.v1.get_default_graph()
app = Flask(__name__)

json_file=open('final_model.json','r')
loaded_model_json=json_file.read()
json_file.close()
loaded_model=model_from_json(loaded_model_json)
loaded_model.load_weights("final_model.h5")

@app.route('/', methods=['GET'])
def index():
    return render_template('digital.html')

@app.route('/predict', methods=['GET','POST'])
def upload():
    if request.method=='POST':
        f=request.files['image']
        basepath=os.path.dirname(__file__)
        file_path=os.path.join(basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)
        img=image.load_img(file_path,target_size=(224,224))

        x=image.img_to_array(img)
        x=np.expanf_dims(x,axis=0)

        with graph.as_default():
            preds=loaded_model.predict_classes(x)

        found=["The great Indian bustart is bustard found on the Indian subcontinent","The spoon-billed sandpiper is small wader that breeds in northestern India"]
        text= found[preds[0]]
        return text

if __name__ =='__main__':
    app.run(threaded=False)