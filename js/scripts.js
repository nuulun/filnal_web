let theme;

$(document).ready(function() {
  localStorage.clear()
  const flightsDefault = [
  { code: "AF101", from: "Almaty", to: "Astana", date: "2025-12-01", time: "09:45", status: "On Time", seats: { economy: 35, business: 10, first: 5 } },
  { code: "AF432", from: "Almaty", to: "Astana", date: "2025-11-13", time: "09:45", status: "On Time", seats: { economy: 35, business: 10, first: 5 } },
  { code: "AF444", from: "Almaty", to: "Astana", date: "2025-11-14", time: "09:45", status: "On Time", seats: { economy: 35, business: 10, first: 5 } },

  { code: "AF203", from: "Astana", to: "Aktobe", date: "2025-11-15", time: "12:20", status: "Boarding", seats: { economy: 40, business: 8, first: 4 } },
  { code: "AF502", from: "Taraz", to: "Aktau", date: "2025-11-25", time: "16:30", status: "Delayed", seats: { economy: 10, business: 10, first: 6 } },
  { code: "AF601", from: "Aktobe", to: "Astana", date: "2025-12-01", time: "08:00", status: "On Time", seats: { economy: 25, business: 15, first: 8 } },
  { code: "AF602", from: "Aktobe", to: "Shymkent", date: "2025-12-12", time: "13:30", status: "Boarding", seats: { economy: 30, business: 4, first: 5 } },
  { code: "AF603", from: "Aktobe", to: "Pavlodar", date: "2025-12-12", time: "15:00", status: "On Time", seats: { economy: 28, business: 6, first: 3 } },
  { code: "AF604", from: "Shymkent", to: "Almaty", date: "2025-12-05", time: "10:30", status: "Delayed", seats: { economy: 20, business: 5, first: 2 } },
  { code: "AF605", from: "Astana", to: "Karaganda", date: "2025-12-08", time: "14:15", status: "On Time", seats: { economy: 32, business: 7, first: 3 } },
  { code: "AF606", from: "Almaty", to: "Shymkent", date: "2025-12-09", time: "09:00", status: "Boarding", seats: { economy: 35, business: 8, first: 4 } },
  { code: "AF607", from: "Taraz", to: "Astana", date: "2025-12-10", time: "11:45", status: "On Time", seats: { economy: 22, business: 10, first: 5 } },
  { code: "AF608", from: "Pavlodar", to: "Almaty", date: "2025-12-11", time: "13:20", status: "Delayed", seats: { economy: 15, business: 6, first: 2 } },
  { code: "AF609", from: "Karaganda", to: "Aktobe", date: "2025-12-12", time: "16:00", status: "Boarding", seats: { economy: 25, business: 5, first: 3 } },
  { code: "AF610", from: "Shymkent", to: "Taraz", date: "2025-12-13", time: "12:30", status: "On Time", seats: { economy: 30, business: 7, first: 4 } },
  { code: "AF611", from: "Almaty", to: "Aktobe", date: "2025-12-14", time: "09:15", status: "On Time", seats: { economy: 40, business: 8, first: 6 } },
  { code: "AF612", from: "Astana", to: "Shymkent", date: "2025-12-15", time: "10:50", status: "Delayed", seats: { economy: 25, business: 5, first: 3 } },
  { code: "AF613", from: "Taraz", to: "Almaty", date: "2025-12-16", time: "14:10", status: "Boarding", seats: { economy: 30, business: 6, first: 4 } },
  { code: "AF614", from: "Aktobe", to: "Karaganda", date: "2025-12-17", time: "08:40", status: "On Time", seats: { economy: 28, business: 7, first: 3 } },
  { code: "AF615", from: "Shymkent", to: "Pavlodar", date: "2025-12-18", time: "15:25", status: "Boarding", seats: { economy: 22, business: 4, first: 2 } },
  { code: "AF616", from: "Karaganda", to: "Almaty", date: "2025-12-19", time: "11:00", status: "On Time", seats: { economy: 35, business: 9, first: 5 } },
  { code: "AF617", from: "Pavlodar", to: "Astana", date: "2025-12-20", time: "13:15", status: "Delayed", seats: { economy: 18, business: 6, first: 2 } },
  { code: "AF618", from: "Almaty", to: "Taraz", date: "2025-12-21", time: "10:05", status: "On Time", seats: { economy: 32, business: 7, first: 4 } },
  { code: "AF619", from: "Astana", to: "Aktobe", date: "2025-12-22", time: "12:50", status: "Boarding", seats: { economy: 27, business: 6, first: 3 } },
  { code: "AF620", from: "Shymkent", to: "Almaty", date: "2025-12-23", time: "09:30", status: "On Time", seats: { economy: 30, business: 8, first: 5 } },
  { code: "AF621", from: "Taraz", to: "Karaganda", date: "2025-12-24", time: "16:45", status: "Delayed", seats: { economy: 20, business: 5, first: 2 } },
  { code: "AF622", from: "Aktobe", to: "Shymkent", date: "2025-12-25", time: "14:00", status: "On Time", seats: { economy: 25, business: 6, first: 3 } },
  { code: "AF623", from: "Pavlodar", to: "Taraz", date: "2025-12-26", time: "11:35", status: "Boarding", seats: { economy: 28, business: 7, first: 4 } },
  { code: "AF624", from: "Karaganda", to: "Shymkent", date: "2025-12-27", time: "10:20", status: "On Time", seats: { economy: 30, business: 8, first: 5 } },
  { code: "AF625", from: "Almaty", to: "Pavlodar", date: "2025-12-28", time: "13:50", status: "Delayed", seats: { economy: 22, business: 5, first: 3 } }
];

  if (!localStorage.getItem("flights")) {
    localStorage.setItem("flights", JSON.stringify(flightsDefault))
  }
  const flights = JSON.parse(localStorage.getItem('flights'));


    if ($("#flightTable").length) {
      flights.forEach(f => {
        $("#flightTable").append(`
          <tr>
            <td>${f.code}</td><td>${f.from}</td><td>${f.to}</td><td>${f.date}</td>
            <td>${f.time}</td><td>${f.status}</td>
          </tr>
        `);
      });
    }
    const themeToggle = $("#themeToggle");
    const currentTheme = localStorage.getItem("theme") || "light";
   $("body").attr("data-theme", currentTheme);

  if (themeToggle.length) {
    themeToggle.text(currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode");
    themeToggle.click(() => {
      const newTheme = $("body").attr("data-theme") === "light" ? "dark" : "light";
      $("body").attr("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.text(newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode");
    });
  }

   $("#book-flight").on('click', '#todaybtn', function() {
      const today = new Date().toISOString().split('T')[0]
      console.log(today);
      const flights = JSON.parse(localStorage.getItem('flights'));
      const matchingFlights = flights.filter(f => 
        f.date=== today
    );
      $('#flightTable').empty();
      if ($("#flightTable").length) {
      matchingFlights.forEach(f => {
        $("#flightTable").append(`
          <tr>
            <td>${f.code}</td><td>${f.from}</td><td>${f.to}</td><td>${f.date}</td>
            <td>${f.time}</td><td>${f.status}</td>
          </tr>
        `);
      });
    }
   })


   $("#book-flight").on('click', '#tomorowbtn', function() {
     const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
  

      const formatted = tomorrow.toISOString().split('T')[0];
      console.log(formatted)
      const flights = JSON.parse(localStorage.getItem('flights'));
      const matchingFlights = flights.filter(f => 
        f.date=== formatted
    );
      $('#flightTable').empty();
      if ($("#flightTable").length) {
      matchingFlights.forEach(f => {
        $("#flightTable").append(`
          <tr>
            <td>${f.code}</td><td>${f.from}</td><td>${f.to}</td><td>${f.date}</td>
            <td>${f.time}</td><td>${f.status}</td>
          </tr>
        `);
      });
    }
   })

   $("#book-flight").on('click', '#searchBoardbtn', function() {
     const dateSearch = $("#departureBoard").val();
  

      const flights = JSON.parse(localStorage.getItem('flights'));
      const matchingFlights = flights.filter(f => 
        f.date=== dateSearch
    );
      $('#flightTable').empty();
      if ($("#flightTable").length) {
      matchingFlights.forEach(f => {
        $("#flightTable").append(`
          <tr>
            <td>${f.code}</td><td>${f.from}</td><td>${f.to}</td><td>${f.date}</td>
            <td>${f.time}</td><td>${f.status}</td>
          </tr>
        `);
      });
    }
   })

    

    $("#bookingForm").on("submit", function(e) {
      e.preventDefault();
      
      let valid = true;
      const from = $("#from").val().trim();
      const to = $("#to").val().trim();
      const departure = $("#departure").val();
      const passengers =  parseInt($("#passengers").val())
      console.log(passengers)
      let travelClass = $("#class").val().toLowerCase();
      if(travelClass === "first class") travelClass = "first";

      if (!from) { $("#from").addClass("is-invalid").removeClass("is-valid"); valid = false; }
      else { $("#from").addClass("is-valid").removeClass("is-invalid"); }

      if (!to) { $("#to").addClass("is-invalid").removeClass("is-valid"); valid = false; }
      else { $("#to").addClass("is-valid").removeClass("is-invalid"); }

      if (!departure) { $("#departure").addClass("is-invalid").removeClass("is-valid"); valid = false; }
      else { $("#departure").addClass("is-valid").removeClass("is-invalid"); }

      

      if (!passengers) { $("#passengers").addClass("is-invalid").removeClass("is-valid"); valid = false; }
      else { $("#passengers").addClass("is-valid").removeClass("is-invalid"); }

      if (!travelClass) { $("#class").addClass("is-invalid").removeClass("is-valid"); valid = false; }
      else { $("#class").addClass("is-valid").removeClass("is-invalid"); }

    if (!valid) return;


    const matchingFlights = flights.filter(f => 
      f.from.toLowerCase() === from.toLowerCase() &&
      f.to.toLowerCase() === to.toLowerCase() &&
      f.date == departure && f.seats[travelClass] >= passengers
    );

    $("#flightTableSearch").empty();

    console.log(travelClass.toLowerCase())

  

    matchingFlights.forEach(f => {
      $("#flightTableSearch").append(`
        <tr>
          <td>${f.code}</td>
          <td>${f.from}</td>
          <td>${f.to}</td>
          <td>${f.date}</td>
          <td>${f.time}</td>
          <td>${f.seats[travelClass]}</td>
          
          <td><button class="buybtn" 
                data-code="${f.code}" 
                data-class="${travelClass}" 
                data-passengers="${passengers}">Buy</button></td>
        </tr>
      `);
    });
  });

  $("#flightTableSearch").on('click', '.buybtn', function() {
  const code = $(this).data('code');
  const classType = $(this).data('class');         
  const passengers = parseInt($(this).data('passengers')); 
  if(!confirm("Are you sure?")) return;

  updateFlightSeats(code, classType, passengers);
  const flights = JSON.parse(localStorage.getItem('flights'));
  const matchingFlights = flights.filter(f => 
      f.code === code
    );

  $("#flightTableSearch").empty();


 
     matchingFlights.forEach(f => {
    let seatsLeft = f.seats[classType] 

    $("#flightTableSearch").append(`
      <tr>
        <td>${f.code}</td>
        <td>${f.from}</td>
        <td>${f.to}</td>
        <td>${f.date}</td>
        <td>${f.time}</td>
        <td>${seatsLeft}</td>
        <td>
          <button class="buybtn" 
                  data-code="${f.code}" 
                  data-class="${classType}" 
                  data-passengers="1">Buy</button>
        </td>
      </tr>
    `);
  }
  )});

  function updateFlightSeats(code, classType, passengers) {
    let flights = JSON.parse(localStorage.getItem('flights')) || [];

    flights = flights.map(flight => {
      if (flight.code === code) {
        return {
          ...flight,
          seats: {
            ...flight.seats,
            [classType]: flight.seats[classType] - passengers
          }
        };
      }
      return flight;
    });

    localStorage.setItem('flights', JSON.stringify(flights));
  }


      
  });
;
