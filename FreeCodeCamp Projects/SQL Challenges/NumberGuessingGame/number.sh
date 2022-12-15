#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"
echo "Enter your username:"
read USERNAME
#generate random
RAND=$(echo $(( $RANDOM % 1000 + 1 )))
GUESSES=0
#check username
USERNAME_RESULT=$($PSQL "SELECT username FROM maintable WHERE username='$USERNAME'" )
#if its a new user
if [[ -z $USERNAME_RESULT ]]
then
#insert into database a new user
INSERT_NAME=$($PSQL "INSERT into maintable (username) values('$USERNAME')")
#greet them
echo "Welcome, $USERNAME! It looks like this is your first time here."
FIRSTTIME=true
else
#if returning user, pull the best game and the games played
BESTGAME=$($PSQL "SELECT bestgame FROM maintable WHERE username='$USERNAME'")
GAMESPLAYED=$($PSQL "SELECT gamesplayed FROM maintable WHERE username='$USERNAME'")
echo "Welcome back, $USERNAME! You have played $GAMESPLAYED games, and your best game took $BESTGAME guesses."
fi

#first guess
echo "Guess the secret number between 1 and 1000:"
read GUESS

while true
do
#add one guess per loop
(( GUESSES += 1 ))
#if not integer
if [[ ! $GUESS =~ ^[0-9]+$ ]]
then
echo -e "\nThat is not an integer, guess again:"
read GUESS
continue
fi

#It's lower than that, guess again:
if [[ $GUESS -gt $RAND ]]
then
echo -e "\nIt's lower than that, guess again:"
read GUESS
continue
fi

#It's higher than that, guess again:
if [[ $GUESS -lt $RAND ]]
then
echo -e "\nIt's higher than that, guess again:"
read GUESS
continue
fi

if [[ $GUESS -eq $RAND ]]
then
echo -e "\nYou guessed it in $GUESSES tries. The secret number was $RAND. Nice job!"
#set guesses back to 0
ZERO=$($PSQL "UPDATE maintable SET guesses = 0 WHERE username='$USERNAME'")
#increment total games
INCR_GAMES=$($PSQL "UPDATE maintable SET gamesplayed = gamesplayed + 1 WHERE username='$USERNAME'")
#check if bestgame is lower than current guesses
BESTGAME=$($PSQL "SELECT bestgame FROM maintable WHERE username='$USERNAME'")
if (( GUESSES < BESTGAME ))
then
#set new best game
NEWBESTGAME=$($PSQL "UPDATE maintable SET bestgame = $GUESSES WHERE username='$USERNAME'")
fi
if [[ $BESTGAME -eq 0 ]]
then
  #set new best game
NEWBESTGAME=$($PSQL "UPDATE maintable SET bestgame = $GUESSES WHERE username='$USERNAME'")
fi
fi
break
done
