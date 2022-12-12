#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
$($PSQL "")
cat games.csv | while IFS="," read YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
do
#exclude the first line
if [[ $YEAR != year ]]
then
WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
OPP_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT' ")
#if team id not found
if [[ -z $WINNER_ID ]]
then 
#insert into teams table
  INSERT_TEAM_RESULT=$($PSQL "INSERT INTO teams (name) VALUES('$WINNER')")
  echo $INSERT_TEAM_RESULT
#get team_id of winner
WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$WINNER'")
fi
if [[ -z $OPP_ID ]]
then
#insert team_id
INSERT_OPP_RESULT=$($PSQL "INSERT INTO teams(name) VALUES('$OPPONENT')")
#get loser team_id
echo $INSERT_OPP_RESULT
OPP_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT' ")
fi
#insert year, round, winner, opp, goals, goals into games table;
INSERT_GAME_RESULT=$($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES ($YEAR, '$ROUND', $WINNER_ID, $OPP_ID, $WINNER_GOALS, $OPPONENT_GOALS)")

  fi
  done