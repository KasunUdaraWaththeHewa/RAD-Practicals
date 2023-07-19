class Employee{
    constructor(empNo,name,address,contact_number,NIC,joinedDate,designation,salary){
        this.empNo=empNo;
        this.name=name;
        this.address=address;
        this.contact_number=contact_number;
        this.NIC=NIC;
        this.joinedDate=joinedDate;
        this.designation=designation;
        this.salary=salary;
    }
    arrives(){
        var d= new Date;
        console.log(this.empNo+" arrives at "+d);
    }
    leaves(){
        var d= new Date;
        console.log(this.empNo +"leaves at "+d);
    }
    informLunchType(lunchType){
        console.log(this.empNo+ " selected "+lunchType);
    }
    informLeave(leaveDate,noOfDates,reason){
        console.log(this.empNo + " informed to leave "+leaveDate+" for "+noOfDates+ " due to "+reason);
    }

}
class PermanantEmployees extends Employee{
    constructor(empNo,name,address,contact_number,NIC,joinedDate,designation,salary) {
        super(empNo,name,address,contact_number,NIC,joinedDate,designation,salary);
    }
}
class ContractBasedEmployees extends Employee{
    constructor(empNo,name,address,contact_number,NIC,joinedDate,designation,salary) {
        super(empNo,name,address,contact_number,NIC,joinedDate,designation,salary);
        this.duration=6;
    }
    requestForExtension(){
        this.duration+=3;
    }
}
class Temporary_Employees extends Employee{
    constructor(empNo,name,address,contact_number,NIC,joinedDate,designation,salary){
        super(empNo,name,address,contact_number,NIC,joinedDate,designation,salary);
        this.duration=12;
    }
    requestForExtension(){
        this.duration+=3;
    }
}
