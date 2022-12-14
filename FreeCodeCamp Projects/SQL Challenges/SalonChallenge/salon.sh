#!/bin/bash
#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~~ Marks Barber Shop ~~~~~\n"

#available services variable
AVAILABLE_SERVICES=$($PSQL "SELECT service_id, name FROM services")

#second prompt
PROMPT_TWO() {
  #ask for phone number
echo -e "\nWhat's your phone number?"
#read phone number
read CUSTOMER_PHONE
#lookup phone number
CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")
CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone = '$CUSTOMER_PHONE'")
#if not a customer, ask for name
if [[ -z $CUSTOMER_ID ]]
then
echo -e "\n You're a first time customer, what is your name?"
#input customer name, phone number into database
read CUSTOMER_NAME
INPUT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers (phone, name) VALUES ('$CUSTOMER_PHONE', '$CUSTOMER_NAME')")
CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")

fi
# ask for a time
echo -e "\nWhat time would you like your appointment?"
read SERVICE_TIME
#add appointment to the database
INPUT_APPOINTMENT_TIME=$($PSQL "INSERT INTO appointments (customer_id, service_id, time) VALUES ($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")

#output a message service, time, name
echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."

}
#first prompt
MAIN_MENU() {
echo -e "\nWelcome to the salon, what service would you like today?"
echo "$AVAILABLE_SERVICES" | while read SERVICENUMBER BAR SERVICE
  do
    echo "$SERVICENUMBER) $SERVICE"
  done
read SERVICE_ID_SELECTED
if [[ ! $SERVICE_ID_SELECTED =~ [1-5] ]]
then
MAIN_MENU "Sorry, that wasn't a valid service number. Which service would you like?"
else
SERVICE_NAME=$($PSQL "SELECT name FROM services WHERE service_id = '$SERVICE_ID_SELECTED'")
PROMPT_TWO
fi
}
MAIN_MENU