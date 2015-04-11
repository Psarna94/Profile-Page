(function() {
    var app = angular.module("profile", []);

  

    app.controller('ProfileController', function(){
        this.products = items;
        this.removeCourse = function(item){
            items.courses.splice(item, 1);
        };
    });


    
    var items = {
        fullname : "Pranu Sarna",
        username: "Psarna94",
        email:"pranusarna@gmail.com",
        courses:["course1", "course2", "course3", "course4", "course5"],
        certificates:[]
    }
})();
