const student={
            name:"Bhumi",
            display:function(){
                console.log(this.name);
            }
        };
        const showName=student.display.bind(student);
        showName();
