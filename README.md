# PAYSTACK PACKAGE FOR NODEJS

To install the package, run the following command in your terminal:

`npm install @chukwukaemi/paystack`

OR

`yarn add @chukwukaemi/paystack`

Create an instance of the Paystack class and pass in your secret API key:

```javascript
const { Paystack } = require("@chukwukaemi/paystack");

const paystack = new Paystack("YOUR_SECRET_API_KEY");
```

## USAGE

### 1. **_Resolve Bank Account Number_**

This method can be used to confirm that an account number and bank code match. It returns the following details:

- Account name
- Account number
- Bank ID

```javascript
const bankAccountNumber = "037006700";
const bankCode = "044";
paystack.resolveAccountNumber(bankAccountNumber, bankCode).then(response => console.log(response))).catch(error => console.log(error));
```

The response will be in the following format:

```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "status": true,
    "message": "Account number resolved",
    "data": {
      "account_number": "037006700",
      "account_name": "JOHN DOE",
      "bank_id": 5
    }
  }
}
```

### 2. **_Resolve Bank Card Bin_**

This endpoint takes the first 6 digits of a card PAN and returns the following details about the card:

- Card Type
- Bin
- Brand
- Sub-brand
- Bank
- Country code
- Country name

```javascript
const cardBin = 515151;
paystack
  .resolveCard(cardBin)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

Response:

```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "status": true,
    "message": "Bin resolved",
    "data": {
      "bin": "515151",
      "brand": "mastercard",
      "sub_brand": "",
      "country_code": "NG",
      "country_name": "Nigeria",
      "card_type": "DEBIT",
      "bank": "Ecobank Nigeria",
      "linked_bank_id": 4
    }
  }
}
```
