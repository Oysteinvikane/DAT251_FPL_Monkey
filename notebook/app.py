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
        return "No players found"
    player_prediction = df[df['player'] == arr[0]]
    player_prediction = player_prediction[['player', 'predicted_points', 'gw', 'opponent_team', 'season']].reset_index(drop=True)
    return player_prediction.to_json(orient='records')

@app.route('/flask/players', methods=['GET'])
def getPlayers():
    df = pd.read_csv(path/'data/predictions_for_season_1920_gw_20.csv', index_col=0)
    players = df['player'].reset_index(drop=True)
    return players.to_json(force_ascii=False, orient='index') # orient=records for a list





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)