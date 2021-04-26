import numpy as np
import pandas as pd
from pathlib import Path
from flask import Flask, request, redirect
from requests import get

app = Flask(__name__)

path = Path('./')

@app.route('/flask/playerPP', methods=['GET'])
def player():
    name = request.args.get('name')
    df = pd.read_csv(path/'data/predictions_for_season_1920_gw_20.csv', index_col=0)
    if name : 
        arr = np.array([name])
    else : 
        arr = np.array(['Martin Kelly'])
    player_prediction = df[df['player'] == arr[0]].predicted_points
    return player_prediction.to_json()

@app.route('/flask/players', methods=['GET'])
def getPlayers():
    df = pd.read_csv(path/'data/predictions_for_season_1920_gw_20.csv', index_col=0)
    players = df['player']
    return players.to_json(force_ascii=False)





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)