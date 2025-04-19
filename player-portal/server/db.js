const samplePlayers = [
  {
    player_id: 1,
    player_name: "Arshad Gafoor Shaikh",
    category: "35+",
    previous_team: "Solapur",
    age: 37,
    current_status: "unsold",
    achievements: "Played Nationals ,state, District & All india",
    photo: "images/1.jpg",
  },
  {
    player_id: 2,
    player_name: "Pranav Alwekar",
    category: "35+",
    previous_team: "Kolhapur",
    age: 35,
    current_status: "unsold",
    achievements: "Kolhapur league 2024 , 25 Runner Up",
    photo: "images/2.jpg",
  },
  {
    player_id: 3,
    player_name: "Pritam Pawar",
    category: "35+",
    previous_team: "Pune",
    age: 36,
    current_status: "unsold",
    achievements:
      "Maharashtra state Masters championship 2025 Thane -  MS35 : 3rd Place. Maharashtra state Masters selection 2025  CCI - MS35 : Semi finalist.",
      photo: "images/3.jpg",
  },
  {
    player_id: 4,
    player_name: "SACHIN V KOLAMBAKAR",
    category: "35+",
    previous_team: "Sangli",
    age: 35,
    current_status: "unsold",
    achievements: "No",
        photo: "images/4.jpg",

  },
  {
    player_id: 5,
    player_name: "Nitin mohan Gadhave",
    category: "35+",
    previous_team: "Pune",
    age: 40,
    current_status: "unsold",
    achievements: "Sangli 1st liege tournament...winner",
    photo: "images/5.jpg",
  },
  {
    player_id: 6,
    player_name: "Rakesh jaypal pethare",
    category: "35+",
    previous_team: "Pune",
    age: 43,
    current_status: "unsold",
    achievements: "State player",
    photo: "images/6.jpg",
  },
  {
    player_id: 7,
    player_name: "Chirag Rajendra Sonecha",
    category: "35+",
    previous_team: "Sangli",
    age: 36,
    current_status: "unsold",
    achievements: "First in Sangli Advocates Bar matches",
    photo: "images/7.jpg",
  },
  {
    player_id: 8,
    player_name: "Vivek Samleti",
    category: "35+",
    previous_team: "Solapur",
    age: 39,
    current_status: "unsold",
    achievements: "N/A",
    photo: "images/8.jpg",
  },
  {
    player_id: 9,
    player_name: "Tanmay Karmarkar",
    category: "35+",
    previous_team: "Kolhapur",
    age: 37,
    current_status: "unsold",
    achievements: "Multiple district champion",
    photo: "images/9.jpg",
  },
  {
    player_id: 10,
    player_name: "Dulesh Patil",
    category: "35+",
    previous_team: "Sangli",
    age: 35,
    current_status: "unsold",
    achievements: "Pune local turnament winner",
    photo: "images/10.jpg",
  },
  {
    player_id: 11,
    player_name: "Krishna Gejage",
    category: "35+",
    previous_team: "Sangli",
    age: 37,
    current_status: "unsold",
    achievements: "District Semifinalist 35+ Doubles Runner Ups",
    photo: "images/11.jpg",
  },
  {
    player_id: 12,
    player_name: "Varun Sanjeev Patil",
    category: "35+",
    previous_team: "Sangli",
    age: 42,
    current_status: "unsold",
    achievements: "Jain premier League",
    photo: "images/12.jpg",
  },
  {
    player_id: 13,
    player_name: "Ninad Kamat",
    category: "35+",
    previous_team: "Kolhapur",
    age: 38,
    current_status: "unsold",
    achievements: "Kolhapur District Winner for 10 years",
    photo: "images/13.jpg",
  },
  {
    player_id: 14,
    player_name: "Tushar S Mulay",
    category: "35+",
    previous_team: "Solapur",
    age: 42,
    current_status: "unsold",
    achievements:
      "District Singles n Doubles winner,35+ singles bronze medalist at Goa in 2022,40+singles winner at Mumbai in 2024",
    photo: "images/14.jpg",
  },
  {
    player_id: 15,
    player_name: "Shailesh Pujari",
    category: "35+",
    previous_team: "Sangli",
    age: 35,
    current_status: "unsold",
    achievements: "No",
    photo: "images/15.jpg",
  },
  {
    player_id: 16,
    player_name: "Ajay Marathe",
    category: "35+",
    previous_team: "Sangli",
    age: 36,
    current_status: "unsold",
    achievements:
      "All India Sr Ranking Tournament, State Tournament participation, NIS cert Badminton coach. Shivaji University and DBATU University coach.",
    photo: "images/16.jpg",
  },
  {
    player_id: 17,
    player_name: "Atul Patil",
    category: "35+",
    previous_team: "Satara",
    age: 39,
    current_status: "unsold",
    achievements: "Sangli league 2024 winner Pune open state runner up 24",
    photo: "images/17.jpg",
  },
  {
    player_id: 18,
    player_name: "Mangesh More",
    category: "35+",
    previous_team: "Sangli",
    age: 0,
    current_status: "unsold",
    achievements: "district winner doubles single all india university",
    photo: "images/18.jpg",
  },
  {
    player_id: 19,
    player_name: "Vinayak Bhogan",
    category: "45+",
    previous_team: "Kolhapur",
    age: 48,
    current_status: "unsold",
    achievements:
      "40+ Winner Sangli district(organised by Digvijay Tarase)\n45+ Winner and 35+ 3rd place (Feb 2025) Ashta badminton tournament\n40+ semi finalist Athani Badminton tournament",
      photo: "images/19.jpg",
  },
  {
    player_id: 20,
    player_name: "Kailash chawala",
    category: "45+",
    previous_team: "Sangli",
    age: 51,
    current_status: "unsold",
    achievements: "No",
    photo: "images/20.jpg",
  },
  {
    player_id: 21,
    player_name: "Shashank B Sawant",
    category: "45+",
    previous_team: "Kolhapur",
    age: 45,
    current_status: "unsold",
    achievements:
      "Ashta open badminton tournament, 45+ winner.held in Feb 2025.",
    photo: "images/21.jpg",
  },
  {
    player_id: 22,
    player_name: "Anand Abasaheb Mugale",
    category: "45+",
    previous_team: "Kolhapur",
    age: 50,
    current_status: "unsold",
    achievements: "District 35+ winner in 2023 Satyajit Nana Foundation",
    photo: "images/22.jpg",
  },
  {
    player_id: 23,
    player_name: "Dnyaneshwar Raosaheb",
    category: "45+",
    previous_team: "Sangli",
    age: 59,
    current_status: "unsold",
    achievements: "No",
    photo: "images/23.jpg",
  },
  {
    player_id: 24,
    player_name: "Sachin Srada",
    category: "45+",
    previous_team: "Sangli",
    age: 46,
    current_status: "unsold",
    achievements: "Singles n doubles State winner in 45+ category",
    photo: "images/24.jpg",
  },
  {
    player_id: 25,
    player_name: "Shivkiran singh thakur",
    category: "45+",
    previous_team: "Pune",
    age: 50,
    current_status: "unsold",
    achievements: "Silver 2025 national masters 50+",
    photo: "images/25.jpg",
  },
  {
    player_id: 26,
    player_name: "Ajitkumar anna patil",
    category: "45+",
    previous_team: "Sangli",
    age: 50,
    current_status: "unsold",
    achievements: "Local tournament winner",
    photo: "images/26.jpg",
  },
  {
    player_id: 27,
    player_name: "Hemant subhash jogalekar",
    category: "45+",
    previous_team: "Sangli",
    age: 46,
    current_status: "unsold",
    achievements: "Pune local tournament winner",
    photo: "images/27.jpg",
  },
  {
    player_id: 28,
    player_name: "Nilesh Phansalkar",
    category: "45+",
    previous_team: "Satara",
    age: 50,
    current_status: "unsold",
    achievements: "2024 State winner 45 single and doubles",
    photo: "images/28.jpg",
  },
  {
    player_id: 29,
    player_name: "Nandkishor Panade",
    category: "45+",
    previous_team: "Sangli",
    age: 51,
    current_status: "unsold",
    achievements: "Sangli district 45+ winner",
    photo: "images/29.jpg",
  },
  {
    player_id: 30,
    player_name: "Shruti Vijay Lohar",
    age: 20,
    category: "Female",
    previous_team: "Satara",
    current_status: "unsold",
    achievements: "University all India University krida mohotsav",
    photo: "images/30.jpg",
  },
  {
    player_id: 31,
    player_name: "Harshita Patil",
    age: 17,
    category: "Female",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Yonex-Sunrise Momentum Cup (Mixs Doubles- Runner Up)",
    photo: "images/31.jpg",
  },
  {
    player_id: 32,
    player_name: "Shreya Dattatraya Jadhav",
    age: 19,
    category: "Female",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "Winner at zonal and Runner up at inter zonal badminton tournament at Shivaji University Kolhapur",
        photo: "images/32.jpg",

  },
  {
    player_id: 33,
    player_name: "Siddhi patil",
    age: 19,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "Runner up in Pune local tournament",
        photo: "images/33.jpg",

  },
  {
    player_id: 34,
    player_name: "Siya nitin bang",
    age: 19,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Winner of Sangli District Badminton Tournament 2023. Winner U19 & Mixed Doubles and Runner Up Women's open. Now representing Sangli District. Maharashtra Open Siddhant Smash Master Badminton Tournament, Pune in 2024 - Runner-up in Doubles Open",
    photo: "images/34.jpg",
  },
  {
    player_id: 35,
    player_name: "Bandewar Vedashri Girish",
    age: 22,
    category: "Female",
    previous_team: "Solapur",
    current_status: "unsold",
    achievements: "Winner U19 & Mixed Doubles and Runner Up Women's open.",
    photo: "images/35.jpg",
  },
  {
    player_id: 36,
    player_name: "Pranali Prakash Wadar",
    age: 18,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "Now representing Sangli District.",
    photo: "images/36.jpg",
  },
  {
    player_id: 37,
    player_name: "Ankita Anant Murgude",
    age: 21,
    category: "Female",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements:
      "Maharashtra Open Siddhant Smash Master Badminton Tournament,",
    photo: "images/37.jpg",
  },
  {
    player_id: 38,
    player_name: "Keya vora",
    age: 14,
    category: "Female",
    previous_team: "Satara",
    current_status: "unsold",
    achievements: "Pune in 2024 - Runner-up in Doubles Open",
    photo: "images/38.jpg",
  },
  {
    player_id: 39,
    player_name: "Maithili Tarase",
    age: 11,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "U11 State winner ,U13 State Semifinalist",
    photo: "images/39.jpg",
  },
  {
    player_id: 40,
    player_name: "Ruta Gore",
    age: 26,
    category: "Female",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "India rank top 40",
    photo: "images/40.jpg",
  },
  {
    player_id: 41,
    player_name: "Om Shivaji Kadam",
    age: 21,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "Rajabhau Kotnis Badminton Tour Karad 2019, School level U19 Dist Selection Satara, Pressfit State Open Mumbai 2020, State Tournament Pune 2020, Satara Dist Tournament 2020 & 2022, Sangli Multi Dist 2022, Interzonal Shivaji University Team, Rajabhau Kotnis Karad 2022, Karad Taluka Doubles 3rd place, Satara Dist Selection 2023",
    photo: "image/41.jpg",
  },
  {
    player_id: 42,
    player_name: "Harshal Jadhav",
    age: 23,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements:
      "Maharashtra State Doubles Champion U17 & U19 (4 years), All India University Games & Khelo India (Captain - Shivaji & Pune University), Junior National Bronze Medalist (Doubles Team Event)",
    photo: "images/42.jpg",
  },
  {
    player_id: 43,
    player_name: "Abhishek Mohite",
    age: 28,
    category: "A+",
    previous_team: "Satara",
    current_status: "unsold",
    achievements: "MS District Winner, All India Nationals Participant",
    photo: "images/43.jpg",
  },
  {
    player_id: 44,
    player_name: "Tanishq Kenjale",
    age: 17,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "Team Maharashtra SGFI Nationals Bronze, U17 Doubles Winner, U19 Singles & Doubles Runner-Up (Multi-District Karad 2024)",
    photo: "images/44.jpg",
  },
  {
    player_id: 45,
    player_name: "Rajeshwar Kanhere",
    age: 21,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "Maharashtra State U19 Doubles Runner-Up, Shivaji University Captain 2024, 4-Time Multi-District Doubles Winner",
    photo: "images/45.jpg",
  },
  {
    player_id: 46,
    player_name: "Ganesh Sapkal",
    age: 31,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Amenora Cup Winner 2025",
    photo: "images/46.jpg",
  },
  {
    player_id: 47,
    player_name: "Ritesh Chawala",
    age: 28,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/47.jpg",
  },
  {
    player_id: 48,
    player_name: "Shripad Deshpande",
    age: 23,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "District Semi-Finalist, Playing for 10 Years",
    photo: "images/48.jpg",
  },
  {
    player_id: 49,
    player_name: "Rahul Tiwadi",
    age: 34,
    category: "A+",
    previous_team: "Solapur",
    current_status: "unsold",
    achievements: "District Level Player",
    photo: "images/49.jpg",
  },
  {
    player_id: 50,
    player_name: "Amey Tamhankar",
    age: 25,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Sangli District Doubles Runner-Up, Shivaji University Winner",
    photo: "images/50.jpg",
  },
  {
    player_id: 51,
    player_name: "Abhishek Uttam Pawar",
    age: 25,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "West Zone University Games - Bhopal",
    photo: "images/51.jpg",
  },
  {
    player_id: 52,
    player_name: "Krishna Jadhav",
    age: 19,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "U19 Inter School Semi-Finalist, Open State Pune U19 Mix Doubles QF, Multi District Karad U19 Doubles QF, District Karad & Satara Semifinalist",
    photo: "images/52.jpg",
  },
  {
    player_id: 53,
    player_name: "Narendra Jagtap",
    age: 26,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements:
      "Open State Tournament Pune Semifinalist, Momentum Cup Pune Winner (Doubles), Runner-Up (Mix Doubles)",
    photo: "images/53.jpg",
  },
  {
    player_id: 54,
    player_name: "Rohan Jadhav",
    age: 26,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Pune District Doubles Runners-Up 2024",
    photo: "images/54.jpg",
  },
  {
    player_id: 55,
    player_name: "Daksh Gaikwad",
    age: 20,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements:
      "Hustle and Hit Season 2 Runner-Up, Shivaji University Zonals Winner",
    photo: "images/55.jpg",
  },
  {
    player_id: 56,
    player_name: "Arbaaz Tajuddin Mujawar",
    age: 22,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements:
      "Kedgaon Pune Singles Open Winner 2024, Kolhapur League Runner-Up 2025",
    photo: "images/56.jpg",
  },
  {
    player_id: 57,
    player_name: "Akash Ram Dawale",
    age: 30,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements: "No",
    photo: "images/57.jpg",
  },
  {
    player_id: 58,
    player_name: "Saleel Maneri",
    age: 16,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Baramati Taluka",
    photo: "images/58.jpg",
  },
  {
    player_id: 59,
    player_name: "Sanskar Shivsharan",
    age: 19,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Baramati Taluka",
    photo: "images/59.jpg",
  },
  {
    player_id: 60,
    player_name: "Harshal Janerao",
    age: 22,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Eagle Eye Tournament Open Men’s Doubles Winner",
    photo: "images/60.jpg",
  },
  {
    player_id: 61,
    player_name: "Siddhesh Suryabhan Palve",
    age: 19,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements:
      "Winner in Multi District States Karad, SPPU University Medalist, MBBL League Winner, Runner Up in Mens Category Open State Solapur, Consistently 2 years Winner at Inter College University Zone selection, Selected for U19 School States Team selection",
    photo: "images/61.jpg",
  },
  {
    player_id: 62,
    player_name: "Ritesh Sandugade",
    age: 21,
    category: "A+",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements:
      "Kolhapur District Badminton Championships 2024 Doubles Runner-Up",
    photo: "images/62.jpg",
  },
  {
    player_id: 63,
    player_name: "Varad Gajbhiye",
    age: 30,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "All India top 16",
    photo: "images/63.jpg",
  },
  {
    player_id: 64,
    player_name: "Pranav Patil",
    age: 21,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Winner at zonal and inter zonal badminton tournament, Selected in Dr. Babasaheb Ambedkar Technological University team for 26th Maharashtra State Inter-University Krida Mahotsav -2024",
    photo: "images/64.jpg",
  },
  {
    player_id: 65,
    player_name: "Aditya Kumar",
    age: 19,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Amanora semi-finalist, Eagle Eye winner U19",
    photo: "images/65.jpg",
  },
  {
    player_id: 66,
    player_name: "Digvijay Tarasa",
    age: 30,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "District doubles, mixed doubles semifinalist",
    photo: "images/66.jpg",
  },
  {
    player_id: 67,
    player_name: "Rehan Hamid Shaikh",
    age: 19,
    category: "Open",
    previous_team: "Solapur",
    current_status: "unsold",
    achievements: "U15 States Runner-up",
    photo: "images/67.jpg",
  },
  {
    player_id: 68,
    player_name: "Anand Soman",
    age: 32,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "",
    photo: "images/68.jpg",
  },
  {
    player_id: 69,
    player_name: "Sudarshan Wadar",
    age: 20,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "West Zone University",
    photo: "images/69.jpg",
  },
  {
    player_id: 70,
    player_name: "Preet B Parshetti",
    age: 19,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/70.jpg",
  },
  {
    player_id: 71,
    player_name: "Aryan Khadilkar",
    age: 17,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "Indian badminton player, Semifinalist for U19 doubles state level",
    photo: "images/71.jpg",
  },
  {
    player_id: 72,
    player_name: "Vivek Misal",
    age: 22,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "No",
    photo: "images/72.jpg",
  },
  {
    player_id: 73,
    player_name: "Vedant Shinde",
    age: 19,
    category: "A+",
    previous_team: "Pune",
    current_status: "unsold",
    achievements:
      "Represented West Zone from Shivaji University, Winner at multi-district tournaments, Played quarterfinal at state tournament, Satara district winner",
    photo: "images/73.jpg",
  },
  {
    player_id: 74,
    player_name: "Digvijay Pawar",
    age: 30,
    category: "A+",
    previous_team: "Satara",
    current_status: "unsold",
    achievements: "Indian Badminton Player",
    photo: "images/74.jpg",
  },
  {
    player_id: 75,
    player_name: "Ruturaj Ghorpade",
    age: 22,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/75.jpg",
  },
  {
    player_id: 76,
    player_name: "Krishna Kore",
    age: 18,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "League Runner Ups",
    photo: "images/76.jpg",
  },
  {
    player_id: 77,
    player_name: "Omkar Bhurke",
    age: 32,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Sangli, Pandharpur, Pune, Malinagar Tournaments winner & runner-up",
    photo: "images/77.jpg",
  },
  {
    player_id: 78,
    player_name: "Yash Dharamdasani",
    age: 25,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/78.jpg",
  },
  {
    player_id: 79,
    player_name: "Abhijeet Surgonda Patil",
    age: 25,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/79.jpg",
  },
  {
    player_id: 80,
    player_name: "Suyog Hanamantrao Domb",
    age: 28,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements: "Pune local matches winner, Hustle and Heat winner",
    photo: "images/80.jpg",
  },
  {
    player_id: 81,
    player_name: "Rushin JOSHI",
    age: 31,
    category: "A+",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/81.jpg",
  },
  {
    player_id: 82,
    player_name: "Ishant Roshan Madavi",
    age: 15,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Inter school state semifinalist, 2 times district winner, open jumbled doubles winner",
    photo: "images/82.jpg",
  },
  {
    player_id: 83,
    player_name: "Sharad Vanmore",
    age: 18,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "State player",
    photo: "images/83.jpg",
  },
  {
    player_id: 84,
    player_name: "Abhishek Jadhav",
    age: 27,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "Represented Shivaji University at university games",
    photo: "images/84.jpg",
  },
  {
    player_id: 85,
    player_name: "Rahul Patil",
    age: 28,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Zonal winner inter zonal 3rd, Winner at inter college tournament",
    photo: "images/85.jpg",
  },
  {
    player_id: 86,
    player_name: "Tejas Shinde",
    age: 20,
    category: "A+",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "National player",
    photo: "images/86.jpg",
  },
  {
    player_id: 87,
    player_name: "Aditya Jaybhaye",
    age: 18,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/87.jpg",
  },
  {
    player_id: 88,
    player_name: "Vikrant Patil",
    age: 32,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Winner Sangli district DKBA organised open and 30+ event. Winner Supernova Pune 30+ event. Member of Hustle and hit team event winner team held in Pune. Member of Bronze Medalist team at Shuttlers Syndicate team event held in Sangli",
    photo: "images/88.jpg",
  },
  {
    player_id: 89,
    player_name: "Vedant Jaykumar Buchade",
    age: 18,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements: "2024 kolhapur district doubles U19 winner",
    photo: "images/89.jpg",
  },
  {
    player_id: 90,
    player_name: "Rahoul Kanne",
    age: 23,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements: "State Winner",
    photo: "images/90.jpg",
  },
  {
    player_id: 91,
    player_name: "Rudr vishal umaraniya",
    age: 19,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements: "Winner Kolhapur district",
    photo: "images/91.jpg",
  },
  {
    player_id: 92,
    player_name: "Aditya Ponkshe",
    age: 28,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Diploma Zonal runner up, Eventoz Pune winner singles, Eventoz Pune runner up singles",
    photo: "images/92.jpg",
  },
  {
    player_id: 93,
    player_name: "Tejas Gadgil",
    age: 31,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "General Championship in Pune University.(MIT), WPU General Championship (MIT), Winner & Runner up Team Member at Wings & Strings League Tournament, Open XD Winner in Sangli District 2020, Winning Team Member at DKBA League Tournament",
    photo: "images/93.jpg",
  },
  {
    player_id: 94,
    player_name: "Sharduul Suryakant Mote",
    age: 23,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Participated in University West zone matches from MPKV Rahuri University, Runner up in shuttlers syndicate team event matches, Miraj Gramin winner",
    photo: "images/94.jpg",
  },
  {
    player_id: 95,
    player_name: "Rishee Sourabh Shah",
    age: 14,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Last time doubles team event winner, district semi finalist, district doubles semi finalist",
    photo: "images/95.jpg",
  },
  {
    player_id: 96,
    player_name: "Omkar Palkar",
    age: 36,
    category: "A+",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "2024 Maharashtra thane league winner, 2024 MBPl Mumbai Maharashtra league winner, 2025 Veterans Maharashtra state singles runner up, 2025 Mix doubles runner up, Playing consecutive state national tournaments",
    photo: "images/96.jpg",
  },
  {
    player_id: 57,
    player_name: "Prashant Suresh Latthe",
    age: 27,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements: "Pharmacy college tournament runner up",
    photo: "images/97.jpg",
  },
  {
    player_id: 98,
    player_name: "Atharva Gavali",
    age: 15,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements:
      "Year 2024, Pune district ranking 2 in XD17, PDMBA YONEX SUNRISE 500 XD 17 WINNER, Rajabhu kotnis Karad Quarter final in BS15 singles and BD15 quarter final, Yonex Sunrise 500 BD 17 Runner Up",
    photo: "images/98.jpg",
  },
  {
    player_id: 99,
    player_name: "Shriyans Nilesh Phansalkar",
    age: 17,
    category: "Open",
    previous_team: "Satara",
    current_status: "unsold",
    achievements:
      "2024 Rajabhu kotnis multi district tournament Karad BS17, SATARA district ranking tournament BS17 Runner Up",
    photo: "images/99.jpg",
  },
  {
    player_id: 100,
    player_name: "Shaunak Kangralkar",
    age: 33,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "No",
    photo: "images/100.jpg",
  },
  {
    player_id: 101,
    player_name: "Aditya Kamble",
    age: 25,
    category: "Open",
    previous_team: "Kolhapur",
    current_status: "unsold",
    achievements:
      "Winner in [KBL] Kolhapur Badminton league 2025 [Doubles], Represented Kolhapur District at inter-district and State Championships Tournaments, Played [BSL] Badminton Super League Navi Mumbai. Represented Maratha Warriors and Secured 3rd place [Doubles], Winner of खासदार चषक Kolhapur [Doubles]",
    photo: "images/101.jpg",
  },
  {
    player_id: 102,
    player_name: "Rajveer",
    age: 15,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Baramati taluka",
    photo: "images/102.jpg",
  },
  {
    player_id: 103,
    player_name: "Gopal Gulabrao Patil",
    age: 23,
    category: "Open",
    previous_team: "Pune",
    current_status: "unsold",
    achievements: "Universal open badminton tournament winner",
    photo: "images/103.jpg",
  },
  {
    player_id: 104,
    player_name: "Harsh Gharge",
    age: 25,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Shivaji University Zone And Inter Zone, Solapur University Inter Zone, Krida Mohotsav Nagpur 2024, Krida Mohotsav Chandrapur 2025, West Zone Indore 2024",
    photo: "images/104.jpg",
  },
  {
    player_id: 105,
    player_name: "Darsh Sarda",
    age: 15,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements: "5 District Winner",
    photo: "images/105.jpg",
  },
  {
    player_id: 106,
    player_name: "Namit Amol Karande",
    age: 16,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "School District winner 2 times, State quarter finalists, 5 Districts doubles winner, selected in Sangli district team",
    photo: "images/106.jpg",
  },
  {
    player_id: 107,
    player_name: "Abhijeet Bhise",
    age: 19,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Sangli district tournament 2024 semi final, Sangli district tournament 2024 double semi final, Lokmat campus club 2024 winner",
    photo: "images/107.jpg",
  },
  {
    player_id: 108,
    player_name: "Prasanna pradip manna ",
    age: 16,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "Open state winner u17, In doubles maharashtra number 8",
    photo: "images/108.jpg",
  },
  {
    player_id: 109,
    player_name: "Avadhut patil",
    age: 36,
    category: "35+",
    previous_team: "Kohlapur",
    current_status: "unsold",
    achievements:
      "N/A",
    photo: "images/109.jpg",
  },
  {
    player_id: 110,
    player_name: "Shubham Yuvraj Patil",
    age: 26,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:
      "2022-23-24 sangli doubles winner ,2022-23 Maharashtra olympics ",
    photo: "images/110.jpg",
  },
  {
    player_id: 111,
    player_name: "Aditya Poojary",
    age: 17,
    category: "Open",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:"*4x district champion ,sangli, *Top 8 in doubles U17 in maharashtra state, *3x 5 district champion in U17 and U19",
    photo: "images/111.jpg",
  },
  {
    player_id: 112,
    player_name: "Shruti  Shankargouda",
    age: 19,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:"Junior BAI ranking:-57, Junior BWF ranking:-611",
    photo: "images/112.jpg",
  },
  {
    player_id: 113,
    player_name: "Kashvee Shah",
    age: 17,
    category: "Female",
    previous_team: "Sangli",
    current_status: "unsold",
    achievements:"Open state doubles runner up, Multi district winner",
    photo: "images/113.jpg",
  },
];

module.exports.getAllPlayers = async () => {
  return samplePlayers;
};
