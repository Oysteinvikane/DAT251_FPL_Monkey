import numpy as np
import pandas as pd
from pathlib import Path
from flask import Flask, request

app = Flask(__name__)



if __name__ == '__main__':
    app.run(debug=true)

path = Path('./')

@app.route('/predict')
def prediction():
    #player = request.fore['player']
    preds = pd.read_csv(path/'notebook/data/predictions_for_season_1920_gw_20.csv')
    arr = np.array(['Martin Kelly'])
    player_prediction = preds[preds['player'] == arr[0]].predicted_points.to_numpy()
    return "Predicted points for " + arr[0] + " in gw 20 is " + str(player_prediction[0])





