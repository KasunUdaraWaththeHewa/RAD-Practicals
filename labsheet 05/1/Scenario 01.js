class Student{
    constructor() {
        var indexNo;
        var name;
        var dateOfBirth;
        var address;
        var contact;
        var email;
        var groupNo;
    }
    assignGroup(){
        var remainder=int(indexNo)%4;
        return (remainder+1);
    }
    setStudent(indexNo,name,dateOfBirth, address, contact, email){
        this.indexNo=indexNo;
        this.name=name;
        this.dateOfBirth=dateOfBirth;
        this.address=address;
        this.contact=contact;
        this.email=email;
    }
    setStudentIndexNo(indexNo){
        this.indexNo=indexNo;
    }
    setStudentName(name){
        this.name=name;
    }
    setStudentDateOfBirth(dateOfBirth){
        this.dateOfBirth=dateOfBirth;
    }
    setStudentAddress(address){
        this.address=address;
    }
    setStudentContact(contact){
        this.contact=contact;
    }
    setStudentEmail(email){
        this.email=email;
    }
    getStudentIndexNo(){
        return this.indexNo;
    }
    getStudentName(){
        return this.name;
    }
    getStudentDateOfBirth(){
        return this.dateOfBirth;
    }
    getStudentAddress(){
        return this.address;
    }
    getStudentContactNo(){
        return this.contact;
    }
    getStudentEmail(){
        return this.email;
    }
    setGroupNo(groupNo){
        this.groupNo=groupNo;
    }
    getGroupNo(){
        return this.groupNo;
    }


}