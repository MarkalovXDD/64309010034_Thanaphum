let Employee = [
    {
        "ID": 30001,
        "name": "นางปรียาดา ตั้งทิพย์",
        "department": "บุคคล",
        "position": "HR",
        "salary": 48000,
        "level": "A",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30002,
        "name": "นายณัฏฐ์ พงษ์วิโรจน์",
        "department": "ไอที",
        "position": "System Engineer",
        "salary": 57000,
        "level": "S",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30003,
        "name": "นายภูวนัย พัฒนปรีชา",
        "department": "การเงิน",
        "position": "Account",
        "salary": 38000,
        "level": "B",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30004,
        "name": "นางสาวเจนจิรา วงศ์สุรวัฒนา",
        "department": "บุคคล",
        "position": "HR",
        "salary": 55000,
        "level": "A",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30005,
        "name": "นายพนาวัฒน์ กลิ่นโพธิ์",
        "department": "บุคคล",
        "position": "HR",
        "salary": 13000,
        "level": "C",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30006,
        "name": "นางธนารีย์ ชัยเจริญ",
        "department": "การเงิน",
        "position": "Account",
        "salary": 41000,
        "level": "S",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30007,
        "name": "นายนิมมาน สยนานนท์",
        "department": "บุคคล",
        "position": "HR",
        "salary": 19000,
        "level": "A",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30008,
        "name": "นายกีรติ มากมี",
        "department": "การเงิน",
        "position": "Account",
        "salary": 46000,
        "level": "C",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
    {
        "ID": 30009,
        "name": "นางสาววรรณิศา โตศิลา",
        "department": "ไอที",
        "position": "System Engineer",
        "salary": 28000,
        "level": "B",
        "Bonus":null,
        "NIPY":null,
        "tax":null
    },
]

//1
console.log("+++ข้อมูลพนักงานทั้งหมด+++")
for (let i = 0; i < Employee.length; i++) {
    if (Employee[i].level == "S") {
        Employee[i].Bonus = Employee[i].salary * 1.8
    } else if (Employee[i].level == "A") {
        Employee[i].Bonus = Employee[i].salary * 1.4
    } else if (Employee[i].level == "B") {
        Employee[i].Bonus = Employee[i].salary * 1.15
    } else if (Employee[i].level == "C") {
        Employee[i].Bonus = Employee[i].salary * 0.8
    }

    Employee[i].NIPY = (Employee[i].salary * 12) + Employee[i].Bonus //รายได้สุทธิ

    //ภาษี
    if (Employee[i].NIPY >= 1000000) {
        Employee[i].tax = Employee[i].NIPY * 32 / 100
    } else if (Employee[i].NIPY >= 550000) {
        Employee[i].tax = Employee[i].NIPY * 23 / 100
    } else if (Employee[i].NIPY >= 250000) {
        Employee[i].tax = Employee[i].NIPY * 9 / 100
    }

    console.log(Employee[i].name,
        "แผนก", Employee[i].department,
        "เงินเดือน", Employee[i].salary,
        "โบนัส", Math.ceil(Employee[i].Bonus),
        "รายได้สุทธิต่อปี", Employee[i].NIPY,
        "ภาษีที่ต้องจ่าย", Employee[i].tax
    )
}

console.log("")
console.log("+++ข้อมูลแผนกไอที+++")

for (i = 0; i < Employee.length; i++) {
    if (Employee[i].department == "ไอที") {
        console.log(Employee[i].name,"ภาษีที่ต้องจ่าย", Employee[i].tax)
    }
}

console.log("")
console.log("+++พนักงานที่ได้รับการประเมินโบนัสระดับ B +++")

for (i = 0; i < Employee.length; i++) {
   // let a
    if (Employee[i].level == "B") {
        console.log(Employee[i].name)
    }
}

console.log("")
console.log("++++++++++++++++++++++++++++++++++++++++")

let sumtax =0;
for (let i = 0; i < Employee.length; i++) {
    sumtax += Employee[i].tax;
}
console.log("ผลรวมภาษีที่พนักงานในบริษัทต้องจ่าย", sumtax,"บาท")

let sumBonus =0;
for (let i = 0; i < Employee.length; i++) {
    sumBonus += Employee[i].Bonus;
}
console.log("โบนัสที่บริษัทจ่ายให้พนักงาน", sumBonus,"บาท")

let allsum =0;
for (let i = 0; i < Employee.length; i++) {
    allsum += Employee[i].NIPY;
}
console.log("รวมรายจ่ายต่อปีของบริษัทที่ต้องจ่ายให้พนักงาน", allsum,"บาท")