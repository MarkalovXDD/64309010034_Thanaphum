let order = [{
    "Customer":"Mr.Lee",
    "ItemOrder":["A4 paper","Ruler"],
    "Qty":[5,2],
    "Price":[120,25]
    },
    {
        "Customer":"Mr.Yue",
        "ItemOder":["Flash Drive","A4 paper"],
        "Qty":[2,3],
        "Price":[130,120]
    },
    {
        "Customer":"Markalov",
        "ItemOrder":["Flash Drive","A4 paper","Ruler"],
        "Qty":[50,120,80],
        "Price":[130,120,25]
    }

];
console.log(order[0].Customer,order[0].ItemOrder,order[0].Qty,order[0].Price);
console.log(order[1].Customer,order[1].ItemOrder,order[1].Qty,order[1].Price);
console.log(order[2].Customer,order[2].ItemOrder,order[2].Qty,order[2].Price);