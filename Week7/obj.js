let obj ={
    "firstName" : "Markalov",
    "lastName" : "XDD",
    "isAlive" : true,
    "age" : 20,
    "address" :{
        "streetAddress": "21 2nd Street",
        "city":"New World",
        "state":"NW",
        "postalCode":"10021-3100"
    },
        "phoneNumber":[
            {
            "type":"home",
            "number":"212 555-1234"
        },{
            "type":"office",
            "number": "646 555-4567",
        },{
            "type":"mobile",
            "number": "123 456 7890"
        }],
    "children": [],
    "spouse": null
};

console.log(obj.address);
console.log(obj.address.city);
console.log("office Number:",obj.phoneNumber[1].number);
    