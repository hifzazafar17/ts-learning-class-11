// class House{                    // class name first letter in uppercase
//       numberofrooms:number=4;
//       numberofbathrooms:number=2;
//       constructor(noOfrooms:number,noOfbathrooms:number){              // ya ek spicial methode hn jb bhi hum kisi bhi class ke ander constructor nhi bana ty tw complier auto pr ek constructor methode bana lety hn last mein, constructor ek methode h jv hum na is ko call kerin gaye
//         console.log(noOfrooms, noOfbathrooms)
//         this.numberofbathrooms = noOfbathrooms
//         this.numberofrooms = noOfrooms       //jis class mein hum "This. use krty hn us me hum ko class ki properties or method " us ke ander jitni cheezen ho go un ko define krtA hn, 
//         this //this = {} empty object hoti hn this ki value     
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     }
//     doorbell(){                  // ysa hum na class ke ander ek method banaya hn
//         console.log("bell pressed")
//     }
// }
// // is ko hum ek varibale ke ander store kr rhy hn 
// let house = new House(4,3)
// let house1 = new House(3,2)
// let house2 = new House(2,1)
// console.log(house);
// console.log(house1);
// console.log(house2);
// agr hum ko kuch bhi add krna h tw woo hum object mein kernin gaye, agr if ki condition bhi bata ni hn tw wo bhi hum object mein hi define kernin gaye,
// console.log(house);
// let house1 = {
//     numberofrooms:4
// }
// let house2 = {
//     numberofrooms:4
// }
// let house3 = {
//     numberofrooms:4
// }
// let house4 = {
//     numberofrooms:4
// }
// console.log(house.numberofrooms)
// // "." jb bhi hum dots use krty hn tw jo "." ke left mein hn wo "objects" hoty hn, or jo right pr hoty hn wo "functions" hoty hn 
// // class Person{
// //     name:string = "hif"
// //     age:number = 23
// // }
var Name = /** @class */ (function () {
    function Name(name) {
        this.name = name;
    }
    return Name;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, _dateOfBirth, course, Id) {
        var _this = _super.call(this, name) || this;
        console.log(name, course, Id);
        _this.studentId = Id;
        _this.name = name;
        _this.studentCourseEnroll = course;
        return _this;
    }
    return Student;
}(Name));
var student1 = new Student("hifza", 2004, "typescript", 101);
var student2 = new Student("Hareem", 2005, "typescript", 102);
var student3 = new Student("Mehreen", 2006, "typescript", 103);
console.log(student1);
// console.log(student2)
// console.log(student3)
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, subject, salary) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        _this.subject = subject;
        _this.salary = salary;
        return _this;
    }
    return Teacher;
}(Name));
var teacher1 = new Student("hifza", 24, "typescript", 15000);
var teacher2 = new Student("Hareem", 27, "javascript", 20000);
var teacher3 = new Student("haleema", 22, "python", 25000);
console.log(teacher1);
// console.log(teacher2)
// console.log(teacher3)
var nameboth = new Name("hif");
console.log(nameboth);
