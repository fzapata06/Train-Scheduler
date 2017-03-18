
    var config = {
    apiKey: "AIzaSyAKztxXDCu8qXShIR2zAx-yunnK3QwXftw",
    authDomain: "fz-project.firebaseapp.com",
    databaseURL: "https://fz-project.firebaseio.com",
    storageBucket: "fz-project.appspot.com",
    messagingSenderId: "928026678226"
  };
  
   firebase.initializeApp(config);
   var database = firebase.database();
   var name = "";
   var dest = "";
   var tFrequency = 0;
   var nextTrain = 0;
   var tMinutesTillTrain = 0;

   $("#add-user").on("click", function() {

     event.preventDefault();

     name = $("#name-input").val().trim();
     dest = $("#dest-input").val().trim();
     tFrequency = $("#tFrequency-input").val().trim();
     nextTrain = $("#nextTrain-input").val().trim();
     tMinutesTillTrain = $("#tMinutesTillTrain-input").val().trim();
     database.ref().push({
       name: name,
       dest: dest,
       tFrequency: tFrequency,
       nextTrain: nextTrain,
       tMinutesTillTrain: tMinutesTillTrain,

     });
    database.ref().on("child_added", function(snapshot) {

     $('#full-train-list').append("<p>" + snapshot.val().name + "</p>");
     $('#full-train-list').append("<p>" + snapshot.val().dest + "</p>");
     $('#full-train-list').append("<p>" + snapshot.val().tFrequency + "</p>");
     $('#full-train-list').append("<p>" + snapshot.val().nextTrain + "</p>");
     $('#full-train-list').append("<p>" + snapshot.val().tMinutesTillTrain + "</p>");
   });

   });

    var tFrequency = 10;
    var firstTime = "04:30";

    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
