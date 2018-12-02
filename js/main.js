body {
  background-color: lightgrey;
}
.title {
  color:teal;
}
#EducationalExperience {
  border: 1px solid black;
     padding: 10px;
     width: 775px;
     height: 515px;
     text-align: justify;        
}
#AboutMe {
  border: 1px solid black;
     padding: 10px;
     width: 639px;
     height: 625px;
     text-align: justify;
 }
 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#WorkSamples {
  border: 1px solid black;
     padding: 10px;
     width: 457px;
     height: 415px;
     text-align: justify;
} 
#TopAccomplishments {
    border: 1px solid black;
       padding: 10px;
       width: 535px;
       height: 225px;
       text-align: justify;
}
#OtherProfiles {
  border: 1px solid black;
     padding: 10px;
     width: 550px;
     height: 150px;
     text-align: justify;
}

.tab {
  overflow: hidden;
  border: 1px solid black;
  background-color: lightgrey;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
  /* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}
