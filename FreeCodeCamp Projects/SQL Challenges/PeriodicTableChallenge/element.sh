#!/bin/bash
#pull first argument store as element
ELEMENT=$1
PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"
if [[ $ELEMENT ]]
then
#element
if [[ $ELEMENT =~ ^[0-9]+$ ]]
  then
  ELEMENT_RESULT=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number=$ELEMENT")
  else
#if there is no result from atomic number query then try querying for symbol
  ELEMENT_RESULT=$($PSQL "SELECT atomic_number FROM elements WHERE symbol = '$ELEMENT' ")
  #if there is no result from symbol query
  if [[ ! $ELEMENT_RESULT ]]
    then
    #then try for full name
    ELEMENT_RESULT=$($PSQL "SELECT atomic_number FROM elements WHERE name='$ELEMENT'")
    #if there is no name either then you can't find it at all
    if [[ ! $ELEMENT_RESULT ]]
    then echo  -e "I could not find that element in the database."
    fi
  #else you did find symbol, element result based on symbol
  fi
fi

#if there was a result 
if [[ $ELEMENT_RESULT ]]
then
ELEMENT_NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number=$ELEMENT_RESULT")
ELEMENT_SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number=$ELEMENT_RESULT")
ELEMENT_TYPE=$($PSQL "SELECT type FROM properties full join types using(type_id) WHERE atomic_number=$ELEMENT_RESULT")
ELEMENT_WEIGHT=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number=$ELEMENT_RESULT")
MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number=$ELEMENT_RESULT")
BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number=$ELEMENT_RESULT")
SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number=$ELEMENT_RESULT")
echo -e "The element with atomic number $(echo $ELEMENT_RESULT | sed 's/ *$//g') is $(echo $ELEMENT_NAME | sed 's/ *$//g') ($(echo $SYMBOL| sed 's/ *$//g')). It's a$ELEMENT_TYPE, with a mass of $(echo $ELEMENT_WEIGHT | sed 's/ *$//g') amu.$ELEMENT_NAME has a melting point of $(echo $MELTING_POINT| sed 's/ *$//g') celsius and a boiling point of $(echo $BOILING_POINT | sed 's/ *$//g') celsius."
fi
else 
echo -e 'Please provide an element as an argument.'
fi