import numpy as np
import pandas as pd
from pathlib import Path
from flask import Flask, request, redirect
from requests import get

app = Flask(__name__)



path = Path('./')

@app.route('/playerPP',methods=['GET'])
def player():
    #player = request.fore['player']
    preds = pd.read_csv(path/'data/predictions_for_season_1920_gw_20.csv')
    arr = np.array(['Martin Kelly'])
    player_prediction = preds[preds['player'] == arr[0]].predicted_points.to_numpy()
    return player_prediction[0]



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)