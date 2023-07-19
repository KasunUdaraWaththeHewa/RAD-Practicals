class Student{
    constructor(){
        var indexNo;
        var mcqMarks;
        var essayMarks;
        var totalMarks;
        var grade;
    }
    setIndexNo(indexNo){
        this.indexNo=indexNo;
    }
    setMcqMarks(mcqMarks){
        this.mcqMarks=mcqMarks;
    }
    setEssayMarks(essayMarks){
        this.essayMarks=essayMarks;
    }
    getIndexNo(){
        return this.indexNo;
    }
    getMcqMarks(){
        return this.mcqMarks;
    }
    getEssayMarks(){
        return this.essayMarks;
    }
    calculateTotal(){
        this.totalMarks= this.mcqMarks+this.essayMarks;
    }
    displayTotal(){
        return this.totalMarks;
    }
    displayPassOrFail(){
        if(this.totalMarks>=50){
            return "Pass"
        }else{
            return "Fail"
        }
    }
    setGrade(){
        if(this.totalMarks>=75){
            this.grade="A";
        }else if(this.totalMarks>=65){
            this.grade="B";
        }else if(this.totalMarks>=55){
            this.grade="C";
        }else if(this.totalMarks>=35){
            this.grade="S";
        }else{
            this.grade="W";
        }
    }
    getGrade(){
        return this.grade;
    }
}