import * as THREE from 'three'
import Experience from '../Experience.js'
import { EventEmitter } from 'events'
import gsap from 'gsap'

export default class Interests {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera
    this.debug = this.experience.debug
    this.device = this.sizes.device
    this.scrolling = this.experience.scrolling

    this.sizes.on('switchdevice', (device) => {
      this.device = device
      console.log(device);
    })

    // Debug
    if(this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('interest1')
    }

    this.obj = {
      x: 4,
      y: 1.2,
      z: 0.5
    }

    // Setup
    this.points = []
    this.raycaster = new THREE.Raycaster()
    this.setInterests()
    this.showInfos()
  }

  setInterests() {
    this.points = [

      ////This one is like 1st is x 2nd is y which acts like z axis and 3rd is y which is positive 
      { /////International Students Hostel
        position: new THREE.Vector3(10.00 , 0 , 8.14),
        element: document.querySelector('.ISHHostel')
      },

      { /////Kinnera Hostel
        position: new THREE.Vector3(11.00 , 0 , 11.78),
        element: document.querySelector('.KinneraHostel')
      },

      { /////Gauthami Hostel
        position: new THREE.Vector3(3.626 , 0 , 10.03),
        element: document.querySelector('.GauthamiHostel')
      },

      { /////Manjeera Hostel
        position: new THREE.Vector3(7.27 , 0 , 13.43),
        element: document.querySelector('.ManjeeraHostel')
      },

      { /////Manjeera Hostel
        position: new THREE.Vector3(7.35 , 0 , 9.06 ),
        element: document.querySelector('.KrishnaHostel')
      },

      { /////RSQ Hostel
        position: new THREE.Vector3(12.836 , 0 ,5.29),
        element: document.querySelector('.RSQ2Hostel')
      },
      { /////Kamala Nehru Hostel
        position: new THREE.Vector3(-5.894  , 0 ,-13.657),
        element: document.querySelector('.KamalaNehruHostel')
      },
      { /////Auditorium Building
        position: new THREE.Vector3(3.896 , 0 ,-5.79),
        element: document.querySelector('.Auditorium')
      },
      { /////IndoorStadium Building
        position: new THREE.Vector3(6.846 , 0 , -2.2373),
        element: document.querySelector('.IndoorStadium')
      },
      { /////UGC Building
        position: new THREE.Vector3(-9.304 , 0 , -11.59),
        element: document.querySelector('.UGC')
      },
      { /////Administrative Building  
        position: new THREE.Vector3(-10.89 , 0 , -7.07),
        element: document.querySelector('.Administrative')
      },

      { /////Examinations Building  
        position: new THREE.Vector3(-10.64  , 0 , -5.77  ),
        element: document.querySelector('.Examinations')
      },

      { /////Examinations Building  
        position: new THREE.Vector3(-9.3  , 0 , -5.68  ),
        element: document.querySelector('.Metallurgical')
      },
      { /////Central Library Building  
        position: new THREE.Vector3(-8.56  , 0 , -3.76  ),
        element: document.querySelector('.CentralLibrary')
      },
      { /////ELECTRICAL AND ELECTRONICS ENGINEERING Building  
        position: new THREE.Vector3(-7.21  , 0 , -2.61   ),
        element: document.querySelector('.EEE')
      },
      { /////Civil Engineering Building  
        position: new THREE.Vector3(-7.37  , 0 , -0.02  ),
        element: document.querySelector('.Civil')
      },
      { /////Mechanical Engineering Building  
        position: new THREE.Vector3(-5.4  , 0 , -2.82  ),
        element: document.querySelector('.Mechanical')
      },
      { /////SCHOOL OF INFORMATION TECHNOLOGY Building  
        position: new THREE.Vector3(-7.89  , 1.12  , -10.36  ),
        element: document.querySelector('.SIT')
      },
      { /////ELECTRONICS AND COMMUNICATION ENGINEERING Building  
        position: new THREE.Vector3(-3.03 , 0 , -9.23  ),
        element: document.querySelector('.ECE')
      },
      { /////Examinations Building  
        position: new THREE.Vector3(-2.64  , 0 , -11.95  ),
        element: document.querySelector('.JHUB')
      },
      { /////Examinations Building  
        position: new THREE.Vector3(-1.71  , 0 , -8.11  ),
        element: document.querySelector('.CSE')
      },
      { /////Examinations Building  
        position: new THREE.Vector3(-1.4   , 0 , -3.2  ),
        element: document.querySelector('.CRC')
      },

      // {
      //   position: new THREE.Vector3(-3.75, 1.2, 0.25),
      //   element: document.querySelector('.mudac')
      // },
      // {
      //   position: new THREE.Vector3(-3.75, 1.2, -1.55),
      //   element: document.querySelector('.elysee')
      // },
      // {
      //   position: new THREE.Vector3(-0.65, 0.17, -1.2),
      //   element: document.querySelector('.arcadia')
      // },
      // {
      //   position: new THREE.Vector3(3.12, 0.17, 0.41),
      //   element: document.querySelector('.nabi')
      // },
      // {
      //   position: new THREE.Vector3(-4.26, 0.17, 0.66),
      //   element: document.querySelector('.lumen')
      // }
    ]

    // Debug
    if(this.debug.active) {
        this.debugFolder
        .add(this.points[2].position, 'x')
        .name('x2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[2].position, 'y')
        .name('y2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[2].position, 'z')
        .name('z2')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'x')
        .name('x1')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'y')
        .name('y1')
        .min(-10)
        .max(10)
        .step(0.01)

        this.debugFolder
        .add(this.points[1].position, 'z')
        .name('z1')
        .min(-10)
        .max(10)
        .step(0.01)
    }
  }

  showInfos() {
    // const mcba = document.querySelector('.mcba')
    const ISHHostel = document.querySelector('.ISHHostel')
    const KinneraHostel = document.querySelector('.KinneraHostel')
    const GautamiHostel = document.querySelector('.GauthamiHostel')
    const ManjeeraHostel = document.querySelector('.ManjeeraHostel')
    const KrishnaHostel = document.querySelector('.KrishnaHostel')
    const RSQ2Hostel = document.querySelector('.RSQ2Hostel')
    const KamalaNehruHostel = document.querySelector('.KamalaNehruHostel')
    const Auditorium = document.querySelector('.Auditorium')
    const IndoorStadium = document.querySelector('.IndoorStadium')
    const UGC = document.querySelector('.UGC')
    const Administrative = document.querySelector('.Administrative')
    const Examinations = document.querySelector('.Examinations')
    const Metallurgical = document.querySelector('.Metallurgical')
    const CentralLibrary = document.querySelector('.CentralLibrary')
    const EEE = document.querySelector('.EEE')
    const Civil = document.querySelector('.Civil')
    const Mechanical = document.querySelector('.Mechanical')
    const SIT = document.querySelector('.SIT')
    const ECE = document.querySelector('.ECE')
    const JHUB = document.querySelector('.JHUB')
    const CSE = document.querySelector('.CSE')
    const CRC = document.querySelector('.CRC')
    // const mudac = document.querySelector('.mudac')
    // const elysee = document.querySelector('.elysee')
    // const arcadia = document.querySelector('.arcadia')
    // const nabi = document.querySelector('.nabi')
    // const lumen = document.querySelector('.lumen')

    const closeIcn = document.querySelector('.close')

    const infoPanel = document.querySelector('.info-panel')
    const infoPanelImage = document.querySelector('.info-panel-image')
    const infoPanelLogo = document.querySelector('.info-panel-logo')
    const infoPanelTitle = document.querySelector('.info-panel-title')
    const infoPanelLead = document.querySelector('.info-panel-lead')
    const infoPanelDescription = document.querySelector('.info-panel-description')
    const infoPanelMo = document.querySelector('.info-panel-monday')
    const infoPanelTu = document.querySelector('.info-panel-tuesday')
    const infoPanelWe = document.querySelector('.info-panel-wednesday')
    const infoPanelTh = document.querySelector('.info-panel-thursday')
    const infoPanelFr = document.querySelector('.info-panel-friday')
    const infoPanelSa = document.querySelector('.info-panel-saturday')
    const infoPanelSu = document.querySelector('.info-panel-sunday')
    const infoPanelPhone = document.querySelector('.info-panel-phone')
    const infoPanelEmail = document.querySelector('.info-panel-email')
    const infoPanelWebsite = document.querySelector('.info-panel-website')
    let infoPanelRightStyle = '0'

    const infos = [

      {
        'image': 'https://jntuhdufr.com/images//hostel_1.jpg',
        'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
        'title': 'INTERNATIONAL STUDENTS HOSTEL - JNTU',
        'lead': 'The International Students Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana is dedicated to providing a welcoming and comfortable living environment for international students. The hostel is designed to cater to the diverse needs of students from different cultural backgrounds, ensuring a safe and enriching experience.',
        'description': 'The International Students Hostel features modern amenities including fully furnished rooms, a dining hall, recreational spaces, and 24/7 security. The hostel offers high-speed Wi-Fi, communal study areas, and a mess serving a variety of cuisines to cater to the diverse tastes of international students. The hostel aims to provide a home away from home, helping students to integrate into campus life and focus on their academic goals.',
        'schedule': [
            'open',
            '06:00 - 22:00',
            '06:00 - 22:00',
            '06:00 - 22:00',
            '06:00 - 22:00',
            '06:00 - 22:00',
            '06:00 - 22:00'
        ],
        'contact': [
            '040 2315 8661',
            'info.hostel@jntuh.ac.in'
        ],
        'website': 'https://jntuh.ac.in'
     },

     {
      'image': 'https://content.jdmagicbox.com/v2/comp/hyderabad/x1/040pxx40.xx40.170913151502.l7x1/catalogue/kinnera-boys-hostel-kukatpally-hyderabad-hostel-for-boy-students-x4jicrnf01.jpg',
      'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
      'title': 'KINNERA BOYS HOSTEL - JNTU',
      'lead': 'The Kinnera Boys Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana provides comfortable and secure accommodation for male students. The hostel is equipped with modern amenities to ensure a conducive environment for both living and studying.',
      'description': 'The Kinnera Boys Hostel offers well-maintained rooms, a common dining area, recreational facilities, and round-the-clock security. Additional amenities include high-speed Wi-Fi, a study hall, and a mess providing healthy meals. The hostel focuses on creating a supportive and enriching environment for students, contributing to their overall well-being and academic success.',
      'schedule': [
          'open',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00'
      ],
      'contact': [
          '040 2315 8661',
          'info.hostel@jntuh.ac.in'
      ],
      'website': 'https://jntuh.ac.in/hostel/kinnera-boys'
   },
   // Gautami Boys Hostel
   {
      'image': 'http://sit.jntuh.ac.in/images/krishna_hostel.jpg',
      'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
      'title': 'GAUTAMI BOYS HOSTEL - JNTU',
      'lead': 'The Gautami Boys Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana provides comfortable and secure accommodation for male students. The hostel is designed to offer a homely environment with modern amenities for students to live, study, and grow.',
      'description': 'The Gautami Boys Hostel features well-furnished rooms, a dining hall, recreational facilities, and 24/7 security. It also offers high-speed Wi-Fi, a common study area, and a mess that serves nutritious meals. The hostel aims to create a supportive community for students, ensuring their well-being and academic success during their time at JNTUH.',
      'schedule': [
          'open',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00',
          '06:00 - 22:00'
      ],
      'contact': [
          '040 2315 8661',
          'info.hostel@jntuh.ac.in'
      ],
      'website': 'https://jntuh.ac.in/hostel/gautami-boys'
   },

   {
    'image': 'http://sit.jntuh.ac.in/images/manjeera_hostel.jpg',
    'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
    'title': 'MANJEERA BOYS HOSTEL - JNTU',
    'lead': 'The Manjeera Boys Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana provides secure and comfortable accommodation for male students. The hostel is designed to foster a supportive living environment, promoting both academic and personal growth.',
    'description': 'Manjeera Boys Hostel offers well-furnished rooms, a dining hall, recreational facilities, and 24/7 security services. The hostel also features high-speed Wi-Fi, a common study area, and a mess serving nutritious meals. It aims to create a holistic living experience for students, ensuring they have the resources and support needed to succeed during their academic journey at JNTUH.',
    'schedule': [
        'open',
        '06:00 - 22:00',
        '06:00 - 22:00',
        '06:00 - 22:00',
        '06:00 - 22:00',
        '06:00 - 22:00',
        '06:00 - 22:00'
    ],
    'contact': [
        '040 2315 8661',
        'info.hostel@jntuh.ac.in'
    ],
    'website': 'https://jntuh.ac.in'
 },
///Krishna Hostel

 {
  'image': 'http://sit.jntuh.ac.in/images/krishna_hostel.jpg',
  'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
  'title': 'Krishna Boys HOSTEL - JNTU',
  'lead': 'The Gautami Boys Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana provides comfortable and secure accommodation for male students. The hostel is designed to offer a homely environment with modern amenities for students to live, study, and grow.',
  'description': 'The Gautami Boys Hostel features well-furnished rooms, a dining hall, recreational facilities, and 24/7 security. It also offers high-speed Wi-Fi, a common study area, and a mess that serves nutritious meals. The hostel aims to create a supportive community for students, ensuring their well-being and academic success during their time at JNTUH.',
  'schedule': [
      'open',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00'
  ],
  'contact': [
      '040 2315 8661',
      'info.hostel@jntuh.ac.in'
  ],
  'website': 'https://jntuh.ac.in/hostel/gautami-boys'
},

 // RSQ2 Hostel
 {
  'image': 'https://jntuhdufr.com/images//hostel_2.jpg',
  'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
  'title': 'RSQ2 HOSTEL - JNTU',
  'lead': 'The RSQ2 Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana offers secure and comfortable accommodation for students. The hostel is equipped with all necessary amenities to support students in their academic and personal lives.',
  'description': 'RSQ2 Hostel provides well-maintained rooms, a dining area, recreational facilities, and round-the-clock security. The hostel also features high-speed Wi-Fi, study areas, and a mess serving nutritious meals. The hostel is committed to creating a supportive and nurturing environment, helping students focus on their studies while enjoying a comfortable living experience.',
  'schedule': [
      'open',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00',
      '06:00 - 22:00'
  ],
  'contact': [
      '040 2315 8661',
      'info.hostel@jntuh.ac.in'
  ],
  'website': 'https://jntuh.ac.in'
},
 //kamala nehru girls hostel
{
  'image': 'http://sit.jntuh.ac.in/images/kamalanehrugirls_hostel.jpg',
  'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
  'title': 'Kamala Nehru Girls Hostel',
  'lead': 'TThe Kamala Nehru Girls Hostel at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) provides a safe and comfortable living environment for female students. It is designed to offer a home-away-from-home experience, fostering a supportive community for academic and personal growth.',
  'description': 'The hostel features well-maintained rooms, dining facilities, and recreational areas. It ensures 24/7 security and is equipped with amenities such as Wi-Fi, a study hall, and laundry services. The hostel is committed to providing a conducive environment for students to focus on their studies while enjoying a balanced campus life.',
  'schedule': [
      'open',
      '24 hours'
  ],
  'contact': [
      '040 2315 8661',
      'info.hostel@jntuh.ac.in'
  ],
  'website': 'https://jntuh.ac.in'
},
  // Auditorium
{
  'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XuLeHdtk910s_gO9LVn4TuWAOcJGMsPM7g&s',
  'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
  'title': 'JNTU AUDITORIUM',
  'lead': 'The Auditorium at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana is a state-of-the-art facility designed to host various academic, cultural, and social events. It serves as a central hub for major university functions, seminars, workshops, and student activities.',
  'description': 'The JNTUH Auditorium is equipped with modern audio-visual systems, comfortable seating arrangements, and a spacious stage. It can accommodate a large number of attendees and is suitable for a variety of events, including conferences, cultural programs, and guest lectures. The auditorium is designed to provide a conducive environment for learning, interaction, and entertainment.',
  'schedule': [
      'open',
      '09:00 - 21:00',
      '09:00 - 21:00',
      '09:00 - 21:00',
      '09:00 - 21:00',
      '09:00 - 21:00',
      '09:00 - 21:00'
  ],
  'contact': [
      '040 2315 8661',
      'info.auditorium@jntuh.ac.in'
  ],
  'website': 'https://jntuh.ac.in'
},
// Indoor stadium
{
  'image': 'https://content3.jdmagicbox.com/v2/comp/hyderabad/y3/040pxx40.xx40.200929164358.t7y3/catalogue/jntu-sports-complex-kukatpally-hyderabad-sports-clubs-oAxwczy5Sx.jpg',
  'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
  'title': 'Indoor Stadium',
  'lead': 'The Indoor Stadium at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) is a premier facility designed to host a wide range of indoor sports and recreational activities. It serves as a hub for students to engage in physical fitness, sportsmanship, and team-building exercises.',
  'description': 'The stadium is equipped with state-of-the-art facilities for various indoor sports such as badminton, table tennis, basketball, and volleyball. It also includes a fitness center and areas designated for yoga and other recreational activities. The Indoor Stadium is a key part of the university’s commitment to promoting a healthy and active lifestyle among students.',
  'schedule': [
      'open',
      '06:00 - 21:00',
      '06:00 - 21:00',
      '06:00 - 21:00',
      '06:00 - 21:00',
      '06:00 - 21:00',
      '06:00 - 21:00',
      '07:00 - 17:00' 
  ],
  'contact': [
      '040 2315 8661',
      'info.indoor@jntuh.ac.in'
  ],
  'website': 'https://jntuh.ac.in'
},
      //ugc
       {
         'image': 'https://lh3.googleusercontent.com/p/AF1QipNeA2_oQRgV3Ytjd8kTVIzP0dq8FmyomHVIc8CE=s1360-w1360-h1020',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTU UGC Human Resources & School of Management Studies',
         'lead': 'The University College of Management Hyderabad (UCMH) was created in the year 1989. The first batch of MBA students were admitted in 1990. During last 30 years, UCMH has evolved into a knowledge hub with emphasis on quality education and all round development. Today, UCMH is a preferred destination for students of MBA Program and Research Scholars pursuing Ph.D. program in the field of Management Science.',
         'description':'University College of Management Hyderabad, JNT University is one of the leading Business Schools in the state of Telangana, located at JNTU campus in a spacious building: It taps the talent of the most successful of the ICET aspirants.',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '040 2315 8661',
           'info.sms@jntuh.ac.in'
         ],
         'website': 'https://jntuh.ac.in/university-college-of-management-hyderabad'
       },
       //administrative building
       {
         'image': 'https://media.telanganatoday.com/wp-content/uploads/2024/03/JNTU.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTUH Administrative Building',
         'lead': 'The Directorate of Academic Affiliations and Academic Audit, oversees various functions related to Affiliated Colleges under Jawaharlal Nehru Technological University Hyderabad (JNTUH).',
         'description':'Administrative building will help those seeking Information about various Engineering (or) Pharmacy (or) MBA (or) MCA (or) 5-Year MBA(Integrated) (or) Pharm.D (or) Pharm.D PB Colleges which are affiliated to JNTUH',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '040 -3241 4600',
           'duaac@jntuh.ac.in'
         ],
         'website': 'http://jntuhaac.in/Home/Index'
       },
       //examination branch
       {
         'image': 'https://lh3.googleusercontent.com/p/AF1QipO3172-KZaA4s5ycjG0KMYzGaqGm5VFxHkRvlm_=s1360-w1360-h1020',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTUH Examinations Building',
         'lead': 'The Examination Building at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) is dedicated to managing and organizing examinations for students across various departments. It plays a crucial role in maintaining the integrity and efficiency of the examination process.',
         'description':'The Examination Building is equipped with facilities to conduct various types of assessments, including written exams, practical exams, and viva-voce. It ensures a streamlined examination process, from scheduling to results processing, and provides necessary resources for students and faculty involved in examinations.',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '040 3240 8661',
           'support.oss@jntuh.ac.in'
         ],
         'website': 'https://jntuh.ac.in/'
       },
       //metullurgy department
       {
         'image': 'https://jntuhceh.ac.in//web/photogallery/IMG_20190619_160519.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'Department of Metallurgical Engineering',
         'lead': 'The B.Tech in Metallurgical Engineering was started in 1989. The Department started functioning independently from 1992. Now the Department has a separate building shared with well-established labs. ',
         'description':'The department is also offering the following programmes, Ph.D - Regular(Metallurgical Engineering) which started in the year 2013 onwards and Ph.D – Part Time  (Metallurgical Engineering),and PG - Part Time (Industrial Metallurgy) started in the year 2010',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '040-23158661- 4530',
           'hod.met.ceh@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/6'
       },
        // Central Library
        {
         'image': 'https://lh3.googleusercontent.com/p/AF1QipOuG3qfCEHfEyBG-Zg4E2MxZDEYHMlX443yAI_U=s1360-w1360-h1020',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTU Central Library',
         'lead': 'The JNTUH Central Library is a pivotal resource center for students and faculty, offering extensive collections and services to support academic and research needs. ',
         'description':' The library provides the following resources and services :Book Lending: Extensive collection of books and reference materials.,Journals and Magazines: National and international journal subscriptions,Digital Resources: Access to e-books, research papers, and databases,Study Facilities: Quiet study areas, group study rooms, and computer terminals.',
         'schedule': [
           'open',
           '9:00 - 24:00',
           '9:00 - 24:00',
           '9:00 - 24:00',
           '9:00 - 24:00',
           '9:00 - 24:00',
           '10:00 - 16:30',
           '10:00 - 16:30'
         ],
         'contact': [
            '040 2315 0 445',
           'hod.met.ceh@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/6'
       },
        // EEE
    
         {
         'image': 'https://jntuhceh.ac.in//web/photogallery/IMG20230623WA0077.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTU ELECTRICAL AND ELECTRONICS ENGINEERING',
         'lead': 'The Department of Electrical and Electronics Engineering (EEE) at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana was established in 1965. It is one of the oldest and most prestigious departments at the university, offering comprehensive programs that blend theoretical knowledge with practical applications.',
         'description': 'Electrical and Electronics Engineering (EEE) is a branch of engineering focused on the study and application of electricity, electronics, and electromagnetism. The curriculum includes a wide array of topics such as power systems, control systems, electrical machines, electronics, and renewable energy technologies.',
         'schedule': [
             'open',
             '10:00 - 18:00',
             '10:00 - 18:00',
             '10:00 - 20:00',
             '10:00 - 18:00',
             '10:00 - 18:00',
             '10:00 - 18:00'
         ],
         'contact': [
             '040 2315 8661',
             'info.eee@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/3'
          },
       // civil
       {
         'image': 'https://jntuhceh.ac.in//web/photogallery/dept_pic.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'Department of Civil Engineering',
         'lead': 'The Department of Civil Engineering at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) was established in 1975. It is a renowned department that provides a robust foundation in civil engineering principles, integrating theoretical study with hands-on experience.',
         'description':'  The Civil Engineering program focuses on the design, construction, and maintenance of infrastructure such as buildings, bridges, and highways. The curriculum covers a broad range of subjects including structural engineering, geotechnical engineering, transportation engineering, environmental engineering, and construction management.',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '+91-40-32408661',
           ' info.civil@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/1'
       },
     // mechanical
     {
         'image': 'https://jntuhceh.ac.in//web/photogallery/1.1.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'Department of Mechanical Engineering',
         'lead': ' The Department of Mechanical Engineering at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) was established in 1971. The department is well-regarded for its comprehensive curriculum and emphasis on both theoretical and practical aspects of mechanical engineering.',
         'description':'  The Mechanical Engineering program covers a wide range of topics including thermodynamics, fluid mechanics, machine design, manufacturing processes, and energy systems. The department is dedicated to preparing students for careers in various sectors of engineering through innovative teaching methods and state-of-the-art laboratories.',
         'schedule': [
           'open',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00',
           '10:00 - 17:00'
         ],
         'contact': [
            '040 2315 8661',
           ' info.mechanical@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/3'
       },
       // School of Information Technology (SIT)
       {
         'image': 'https://lh3.googleusercontent.com/p/AF1QipPDgkYl59KyaC5wtvRzNRcuirfcOEV34WgjbUWF=s1360-w1360-h1020',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'SCHOOL OF INFORMATION TECHNOLOGY - JNTU',
         'lead': 'The School of Information Technology (SIT) at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana is dedicated to advancing the field of information technology through high-quality education and research. Established in 1997, SIT offers a range of undergraduate, postgraduate, and doctoral programs.',
         'description': 'SIT focuses on various aspects of information technology including software engineering, data science, network security, and artificial intelligence. The school is equipped with state-of-the-art laboratories and research facilities, providing students with hands-on experience and industry exposure. SIT is committed to fostering innovation and preparing students for careers in the rapidly evolving IT sector.',
         'schedule': [
             'open',
             '09:00 - 17:00',
             '09:00 - 17:00',
             '09:00 - 17:00',
             '09:00 - 17:00',
             '09:00 - 17:00',
             'closed'
         ],
         'contact': [
             '040 2315 8661',
             'info.sit@jntuh.ac.in'
         ],
         'website': 'https://jntuh.ac.in/sit'
      },
       // ECE
       {
         'image': 'https://jntuhceh.ac.in//web/photogallery/ece.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTU ELECTRONICS AND COMMUNICATION ENGINEERING',
         'lead': 'The Department of Electronics and Communication Engineering (ECE) at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana was established in 1973. It is one of the pioneering departments of the university, known for its excellence in teaching, research, and producing industry-ready engineers.',
         'description': 'Electronics and Communication Engineering (ECE) is a branch of engineering that deals with the research, design, development, and testing of electronic devices and communication systems. The curriculum covers a broad range of topics such as analog and digital communication, microelectronics, signal processing, and VLSI design.',
         'schedule': [
             'open',
             '10:00 - 18:00',
             '10:00 - 18:00',
             '10:00 - 20:00',
             '10:00 - 18:00',
             '10:00 - 18:00',
             '10:00 - 18:00'
         ],
         'contact': [
             '040 2315 8661',
             'info.ece@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/4'
      },
       // J-Hub
       {
         'image': 'https://media.licdn.com/dms/image/v2/C5616AQGR-uzbBZCQTQ/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1616136876367?e=2147483647&v=beta&t=TV5aRGgpHUi9EiVff1TGQDpKj2kUhn8v8xYcwJpbEWg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'J-HUB - JNTU',
         'lead': 'J-Hub at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) is an innovation and incubation center designed to foster entrepreneurship and technological advancements. It serves as a platform for students and researchers to develop and commercialize their innovative ideas.',
         'description': 'J-Hub provides various facilities including co-working spaces, meeting rooms, and access to industry mentors. It supports startups and entrepreneurs by offering resources such as funding opportunities, workshops, and networking events. The hub aims to create a vibrant ecosystem for innovation and entrepreneurship, helping to bridge the gap between academic research and real-world applications.',
         'schedule': [
             'open',
             '09:00 - 18:00',
             '09:00 - 18:00',
             '09:00 - 18:00',
             '09:00 - 18:00',
             '09:00 - 18:00',
             'closed'
         ],
         'contact': [
             '040 2315 8661',
             'info.jhub@jntuh.ac.in'
         ],
         'website': 'https://jntuh.ac.in/jhub'
         },
          //CSE
       {'image': 'https://jntuhceh.ac.in//web/photogallery/cse.jpg',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'JNTU COMPUTER SCIENCE AND ENGINEERING',
         'lead': 'The Department of Computer Science and Engineering (CSE) at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) in Telangana was established in 1984. It has since grown to become one of the leading departments in the university, offering various undergraduate, postgraduate, and doctoral programs in computer science and related fields.',
         'description':'Computer Science Engineering is a course that deals with design, implementation, and management of information systems of both software & hardware processes. Computer Science Engineering (CSE) is an engineering discipline that covers several topics related to computation, programming languages, program design, computer hardware and software and integrates several fields of computer science .',
         'schedule': [
           'open',
           '10:00 - 18:00',
           '10:00 - 18:00',
           '10:00 - 20:00',
           '10:00 - 18:00',
           '10:00 - 18:00',
           '10:00 - 18:00'
         ],
         'contact': [
            '040 2315 8661',
           ' hod.cse.ceh@jntuh.ac.in'
         ],
         'website': 'https://jntuhceh.ac.in/viewdept/5'
       },
         // Classroom Complex
      {
         'image': 'https://lh5.googleusercontent.com/p/AF1QipNOKms7U9-81x3antVe9R1UScj-YXtq7ts639P2=w260-h175-n-k-no',
         'logo': 'https://upload.wikimedia.org/wikipedia/en/e/ea/JNTU_Hyderabad_logo.png',
         'title': 'CLASSROOM COMPLEX - JNTU',
         'lead': 'The Classroom Complex at Jawaharlal Nehru Technological University, Hyderabad (JNTUH) is a central facility designed to support the university’s academic activities. It provides a range of modern classrooms and seminar halls equipped with the latest teaching and learning technologies.',
         'description': 'The Classroom Complex features well-structured classrooms, seminar halls, and lecture theaters with state-of-the-art audiovisual equipment. It is designed to accommodate various class sizes and formats, supporting interactive and effective teaching. The complex aims to enhance the learning experience by providing a comfortable and technologically advanced environment for both students and faculty.',
         'schedule': [
             'open',
             '08:00 - 20:00',
             '08:00 - 20:00',
             '08:00 - 20:00',
             '08:00 - 20:00',
             '08:00 - 20:00',
             'closed'
         ],
         'contact': [
             '040 2315 8661',
             'info.classrooms@jntuh.ac.in'
         ],
         'website': 'https://jntuh.ac.in/classroom-complex'
      },
       
      
    
     ]
    if (this.device === 'desktop') {
      infoPanelRightStyle  = '-33%'
    } else {
      infoPanelRightStyle  = '-100%'
    }

    // mcba.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[0].image
    //   infoPanelLogo.src = infos[0].logo
    //   infoPanelTitle.innerHTML = infos[0].title
    //   infoPanelLead.innerHTML = infos[0].lead
    //   infoPanelDescription.innerHTML = infos[0].description
    //   infoPanelMo.innerHTML = infos[0].schedule[0]
    //   infoPanelTu.innerHTML = infos[0].schedule[1]
    //   infoPanelWe.innerHTML = infos[0].schedule[2]
    //   infoPanelTh.innerHTML = infos[0].schedule[3]
    //   infoPanelFr.innerHTML = infos[0].schedule[4]
    //   infoPanelSa.innerHTML = infos[0].schedule[5]
    //   infoPanelSu.innerHTML = infos[0].schedule[6]
    //   infoPanelPhone.innerHTML = infos[0].contact[0]
    //   infoPanelEmail.innerHTML = infos[0].contact[1]
    //   infoPanelWebsite.href = infos[0].website
    // }); 

    ISHHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[0].image
      infoPanelLogo.src = infos[0].logo
      infoPanelTitle.innerHTML = infos[0].title
      infoPanelLead.innerHTML = infos[0].lead
      infoPanelDescription.innerHTML = infos[0].description
      infoPanelMo.innerHTML = infos[0].schedule[0]
      infoPanelTu.innerHTML = infos[0].schedule[1]
      infoPanelWe.innerHTML = infos[0].schedule[2]
      infoPanelTh.innerHTML = infos[0].schedule[3]
      infoPanelFr.innerHTML = infos[0].schedule[4]
      infoPanelSa.innerHTML = infos[0].schedule[5]
      infoPanelSu.innerHTML = infos[0].schedule[6]
      infoPanelPhone.innerHTML = infos[0].contact[0]
      infoPanelEmail.innerHTML = infos[0].contact[1]
      infoPanelWebsite.href = infos[0].website
    });

    KinneraHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[1].image
      infoPanelLogo.src = infos[1].logo
      infoPanelTitle.innerHTML = infos[1].title
      infoPanelLead.innerHTML = infos[1].lead
      infoPanelDescription.innerHTML = infos[1].description
      infoPanelMo.innerHTML = infos[1].schedule[0]
      infoPanelTu.innerHTML = infos[1].schedule[1]
      infoPanelWe.innerHTML = infos[1].schedule[2]
      infoPanelTh.innerHTML = infos[1].schedule[3]
      infoPanelFr.innerHTML = infos[1].schedule[4]
      infoPanelSa.innerHTML = infos[1].schedule[5]
      infoPanelSu.innerHTML = infos[1].schedule[6]
      infoPanelPhone.innerHTML = infos[1].contact[0]
      infoPanelEmail.innerHTML = infos[1].contact[1]
      infoPanelWebsite.href = infos[1].website
    });


    GautamiHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[2].image
      infoPanelLogo.src = infos[2].logo
      infoPanelTitle.innerHTML = infos[2].title
      infoPanelLead.innerHTML = infos[2].lead
      infoPanelDescription.innerHTML = infos[2].description
      infoPanelMo.innerHTML = infos[2].schedule[0]
      infoPanelTu.innerHTML = infos[2].schedule[1]
      infoPanelWe.innerHTML = infos[2].schedule[2]
      infoPanelTh.innerHTML = infos[2].schedule[3]
      infoPanelFr.innerHTML = infos[2].schedule[4]
      infoPanelSa.innerHTML = infos[2].schedule[5]
      infoPanelSu.innerHTML = infos[2].schedule[6]
      infoPanelPhone.innerHTML = infos[2].contact[0]
      infoPanelEmail.innerHTML = infos[2].contact[1]
      infoPanelWebsite.href = infos[2].website
    });




    ManjeeraHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[3].image
      infoPanelLogo.src = infos[3].logo
      infoPanelTitle.innerHTML = infos[3].title
      infoPanelLead.innerHTML = infos[3].lead
      infoPanelDescription.innerHTML = infos[3].description
      infoPanelMo.innerHTML = infos[3].schedule[0]
      infoPanelTu.innerHTML = infos[3].schedule[1]
      infoPanelWe.innerHTML = infos[3].schedule[2]
      infoPanelTh.innerHTML = infos[3].schedule[3]
      infoPanelFr.innerHTML = infos[3].schedule[4]
      infoPanelSa.innerHTML = infos[3].schedule[5]
      infoPanelSu.innerHTML = infos[3].schedule[6]
      infoPanelPhone.innerHTML = infos[3].contact[0]
      infoPanelEmail.innerHTML = infos[3].contact[1]
      infoPanelWebsite.href = infos[3].website
    });

    KrishnaHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[4].image
      infoPanelLogo.src = infos[4].logo
      infoPanelTitle.innerHTML = infos[4].title
      infoPanelLead.innerHTML = infos[4].lead
      infoPanelDescription.innerHTML = infos[4].description
      infoPanelMo.innerHTML = infos[4].schedule[0]
      infoPanelTu.innerHTML = infos[4].schedule[1]
      infoPanelWe.innerHTML = infos[4].schedule[2]
      infoPanelTh.innerHTML = infos[4].schedule[3]
      infoPanelFr.innerHTML = infos[4].schedule[4]
      infoPanelSa.innerHTML = infos[4].schedule[5]
      infoPanelSu.innerHTML = infos[4].schedule[6]
      infoPanelPhone.innerHTML = infos[4].contact[0]
      infoPanelEmail.innerHTML = infos[4].contact[1]
      infoPanelWebsite.href = infos[4].website
    });
    RSQ2Hostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[5].image
      infoPanelLogo.src = infos[5].logo
      infoPanelTitle.innerHTML = infos[5].title
      infoPanelLead.innerHTML = infos[5].lead
      infoPanelDescription.innerHTML = infos[5].description
      infoPanelMo.innerHTML = infos[5].schedule[0]
      infoPanelTu.innerHTML = infos[5].schedule[1]
      infoPanelWe.innerHTML = infos[5].schedule[2]
      infoPanelTh.innerHTML = infos[5].schedule[3]
      infoPanelFr.innerHTML = infos[5].schedule[4]
      infoPanelSa.innerHTML = infos[5].schedule[5]
      infoPanelSu.innerHTML = infos[5].schedule[6]
      infoPanelPhone.innerHTML = infos[5].contact[0]
      infoPanelEmail.innerHTML = infos[5].contact[1]
      infoPanelWebsite.href = infos[5].website
    });

    KamalaNehruHostel.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[6].image
      infoPanelLogo.src = infos[6].logo
      infoPanelTitle.innerHTML = infos[6].title
      infoPanelLead.innerHTML = infos[6].lead
      infoPanelDescription.innerHTML = infos[6].description
      infoPanelMo.innerHTML = infos[6].schedule[0]
      infoPanelTu.innerHTML = infos[6].schedule[1]
      infoPanelWe.innerHTML = infos[6].schedule[2]
      infoPanelTh.innerHTML = infos[6].schedule[3]
      infoPanelFr.innerHTML = infos[6].schedule[4]
      infoPanelSa.innerHTML = infos[6].schedule[5]
      infoPanelSu.innerHTML = infos[6].schedule[6]
      infoPanelPhone.innerHTML = infos[6].contact[0]
      infoPanelEmail.innerHTML = infos[6].contact[1]
      infoPanelWebsite.href = infos[6].website
    });
    Auditorium.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[7].image
      infoPanelLogo.src = infos[7].logo
      infoPanelTitle.innerHTML = infos[7].title
      infoPanelLead.innerHTML = infos[7].lead
      infoPanelDescription.innerHTML = infos[7].description
      infoPanelMo.innerHTML = infos[7].schedule[0]
      infoPanelTu.innerHTML = infos[7].schedule[1]
      infoPanelWe.innerHTML = infos[7].schedule[2]
      infoPanelTh.innerHTML = infos[7].schedule[3]
      infoPanelFr.innerHTML = infos[7].schedule[4]
      infoPanelSa.innerHTML = infos[7].schedule[5]
      infoPanelSu.innerHTML = infos[7].schedule[6]
      infoPanelPhone.innerHTML = infos[7].contact[0]
      infoPanelEmail.innerHTML = infos[7].contact[1]
      infoPanelWebsite.href = infos[7].website
    });
    
    IndoorStadium.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[8].image
      infoPanelLogo.src = infos[8].logo
      infoPanelTitle.innerHTML = infos[8].title
      infoPanelLead.innerHTML = infos[8].lead
      infoPanelDescription.innerHTML = infos[8].description
      infoPanelMo.innerHTML = infos[8].schedule[0]
      infoPanelTu.innerHTML = infos[8].schedule[1]
      infoPanelWe.innerHTML = infos[8].schedule[2]
      infoPanelTh.innerHTML = infos[8].schedule[3]
      infoPanelFr.innerHTML = infos[8].schedule[4]
      infoPanelSa.innerHTML = infos[8].schedule[5]
      infoPanelSu.innerHTML = infos[8].schedule[6]
      infoPanelPhone.innerHTML = infos[8].contact[0]
      infoPanelEmail.innerHTML = infos[8].contact[1]
      infoPanelWebsite.href = infos[8].website
    });

    UGC.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[9].image
      infoPanelLogo.src = infos[9].logo
      infoPanelTitle.innerHTML = infos[9].title
      infoPanelLead.innerHTML = infos[9].lead
      infoPanelDescription.innerHTML = infos[9].description
      infoPanelMo.innerHTML = infos[9].schedule[0]
      infoPanelTu.innerHTML = infos[9].schedule[1]
      infoPanelWe.innerHTML = infos[9].schedule[2]
      infoPanelTh.innerHTML = infos[9].schedule[3]
      infoPanelFr.innerHTML = infos[9].schedule[4]
      infoPanelSa.innerHTML = infos[9].schedule[5]
      infoPanelSu.innerHTML = infos[9].schedule[6]
      infoPanelPhone.innerHTML = infos[9].contact[0]
      infoPanelEmail.innerHTML = infos[9].contact[1]
      infoPanelWebsite.href = infos[9].website
    });

    Administrative.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[10].image
      infoPanelLogo.src = infos[10].logo
      infoPanelTitle.innerHTML = infos[10].title
      infoPanelLead.innerHTML = infos[10].lead
      infoPanelDescription.innerHTML = infos[10].description
      infoPanelMo.innerHTML = infos[10].schedule[0]
      infoPanelTu.innerHTML = infos[10].schedule[1]
      infoPanelWe.innerHTML = infos[10].schedule[2]
      infoPanelTh.innerHTML = infos[10].schedule[3]
      infoPanelFr.innerHTML = infos[10].schedule[4]
      infoPanelSa.innerHTML = infos[10].schedule[5]
      infoPanelSu.innerHTML = infos[10].schedule[6]
      infoPanelPhone.innerHTML = infos[10].contact[0]
      infoPanelEmail.innerHTML = infos[10].contact[1]
      infoPanelWebsite.href = infos[10].website
    });


    Examinations.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[11].image
      infoPanelLogo.src = infos[11].logo
      infoPanelTitle.innerHTML = infos[11].title
      infoPanelLead.innerHTML = infos[11].lead
      infoPanelDescription.innerHTML = infos[11].description
      infoPanelMo.innerHTML = infos[11].schedule[0]
      infoPanelTu.innerHTML = infos[11].schedule[1]
      infoPanelWe.innerHTML = infos[11].schedule[2]
      infoPanelTh.innerHTML = infos[11].schedule[3]
      infoPanelFr.innerHTML = infos[11].schedule[4]
      infoPanelSa.innerHTML = infos[11].schedule[5]
      infoPanelSu.innerHTML = infos[11].schedule[6]
      infoPanelPhone.innerHTML = infos[11].contact[0]
      infoPanelEmail.innerHTML = infos[11].contact[1]
      infoPanelWebsite.href = infos[11].website
    });


    Metallurgical.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[12].image
      infoPanelLogo.src = infos[12].logo
      infoPanelTitle.innerHTML = infos[12].title
      infoPanelLead.innerHTML = infos[12].lead
      infoPanelDescription.innerHTML = infos[12].description
      infoPanelMo.innerHTML = infos[12].schedule[0]
      infoPanelTu.innerHTML = infos[12].schedule[1]
      infoPanelWe.innerHTML = infos[12].schedule[2]
      infoPanelTh.innerHTML = infos[12].schedule[3]
      infoPanelFr.innerHTML = infos[12].schedule[4]
      infoPanelSa.innerHTML = infos[12].schedule[5]
      infoPanelSu.innerHTML = infos[12].schedule[6]
      infoPanelPhone.innerHTML = infos[12].contact[0]
      infoPanelEmail.innerHTML = infos[12].contact[1]
      infoPanelWebsite.href = infos[12].website
    });


    CentralLibrary.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[13].image
      infoPanelLogo.src = infos[13].logo
      infoPanelTitle.innerHTML = infos[13].title
      infoPanelLead.innerHTML = infos[13].lead
      infoPanelDescription.innerHTML = infos[13].description
      infoPanelMo.innerHTML = infos[13].schedule[0]
      infoPanelTu.innerHTML = infos[13].schedule[1]
      infoPanelWe.innerHTML = infos[13].schedule[2]
      infoPanelTh.innerHTML = infos[13].schedule[3]
      infoPanelFr.innerHTML = infos[13].schedule[4]
      infoPanelSa.innerHTML = infos[13].schedule[5]
      infoPanelSu.innerHTML = infos[13].schedule[6]
      infoPanelPhone.innerHTML = infos[13].contact[0]
      infoPanelEmail.innerHTML = infos[13].contact[1]
      infoPanelWebsite.href = infos[13].website
    });

    EEE.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[14].image
      infoPanelLogo.src = infos[14].logo
      infoPanelTitle.innerHTML = infos[14].title
      infoPanelLead.innerHTML = infos[14].lead
      infoPanelDescription.innerHTML = infos[14].description
      infoPanelMo.innerHTML = infos[14].schedule[0]
      infoPanelTu.innerHTML = infos[14].schedule[1]
      infoPanelWe.innerHTML = infos[14].schedule[2]
      infoPanelTh.innerHTML = infos[14].schedule[3]
      infoPanelFr.innerHTML = infos[14].schedule[4]
      infoPanelSa.innerHTML = infos[14].schedule[5]
      infoPanelSu.innerHTML = infos[14].schedule[6]
      infoPanelPhone.innerHTML = infos[14].contact[0]
      infoPanelEmail.innerHTML = infos[14].contact[1]
      infoPanelWebsite.href = infos[14].website
    });



    Civil.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[15].image
      infoPanelLogo.src = infos[15].logo
      infoPanelTitle.innerHTML = infos[15].title
      infoPanelLead.innerHTML = infos[15].lead
      infoPanelDescription.innerHTML = infos[15].description
      infoPanelMo.innerHTML = infos[15].schedule[0]
      infoPanelTu.innerHTML = infos[15].schedule[1]
      infoPanelWe.innerHTML = infos[15].schedule[2]
      infoPanelTh.innerHTML = infos[15].schedule[3]
      infoPanelFr.innerHTML = infos[15].schedule[4]
      infoPanelSa.innerHTML = infos[15].schedule[5]
      infoPanelSu.innerHTML = infos[15].schedule[6]
      infoPanelPhone.innerHTML = infos[15].contact[0]
      infoPanelEmail.innerHTML = infos[15].contact[1]
      infoPanelWebsite.href = infos[15].website
    });


    Mechanical.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[16].image
      infoPanelLogo.src = infos[16].logo
      infoPanelTitle.innerHTML = infos[16].title
      infoPanelLead.innerHTML = infos[16].lead
      infoPanelDescription.innerHTML = infos[16].description
      infoPanelMo.innerHTML = infos[16].schedule[0]
      infoPanelTu.innerHTML = infos[16].schedule[1]
      infoPanelWe.innerHTML = infos[16].schedule[2]
      infoPanelTh.innerHTML = infos[16].schedule[3]
      infoPanelFr.innerHTML = infos[16].schedule[4]
      infoPanelSa.innerHTML = infos[16].schedule[5]
      infoPanelSu.innerHTML = infos[16].schedule[6]
      infoPanelPhone.innerHTML = infos[16].contact[0]
      infoPanelEmail.innerHTML = infos[16].contact[1]
      infoPanelWebsite.href = infos[16].website
    });


    SIT.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[17].image
      infoPanelLogo.src = infos[17].logo
      infoPanelTitle.innerHTML = infos[17].title
      infoPanelLead.innerHTML = infos[17].lead
      infoPanelDescription.innerHTML = infos[17].description
      infoPanelMo.innerHTML = infos[17].schedule[0]
      infoPanelTu.innerHTML = infos[17].schedule[1]
      infoPanelWe.innerHTML = infos[17].schedule[2]
      infoPanelTh.innerHTML = infos[17].schedule[3]
      infoPanelFr.innerHTML = infos[17].schedule[4]
      infoPanelSa.innerHTML = infos[17].schedule[5]
      infoPanelSu.innerHTML = infos[17].schedule[6]
      infoPanelPhone.innerHTML = infos[17].contact[0]
      infoPanelEmail.innerHTML = infos[17].contact[1]
      infoPanelWebsite.href = infos[17].website
    });


    ECE.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[18].image
      infoPanelLogo.src = infos[18].logo
      infoPanelTitle.innerHTML = infos[18].title
      infoPanelLead.innerHTML = infos[18].lead
      infoPanelDescription.innerHTML = infos[18].description
      infoPanelMo.innerHTML = infos[18].schedule[0]
      infoPanelTu.innerHTML = infos[18].schedule[1]
      infoPanelWe.innerHTML = infos[18].schedule[2]
      infoPanelTh.innerHTML = infos[18].schedule[3]
      infoPanelFr.innerHTML = infos[18].schedule[4]
      infoPanelSa.innerHTML = infos[18].schedule[5]
      infoPanelSu.innerHTML = infos[18].schedule[6]
      infoPanelPhone.innerHTML = infos[18].contact[0]
      infoPanelEmail.innerHTML = infos[18].contact[1]
      infoPanelWebsite.href = infos[18].website
    });

    JHUB.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[19].image
      infoPanelLogo.src = infos[19].logo
      infoPanelTitle.innerHTML = infos[19].title
      infoPanelLead.innerHTML = infos[19].lead
      infoPanelDescription.innerHTML = infos[19].description
      infoPanelMo.innerHTML = infos[19].schedule[0]
      infoPanelTu.innerHTML = infos[19].schedule[1]
      infoPanelWe.innerHTML = infos[19].schedule[2]
      infoPanelTh.innerHTML = infos[19].schedule[3]
      infoPanelFr.innerHTML = infos[19].schedule[4]
      infoPanelSa.innerHTML = infos[19].schedule[5]
      infoPanelSu.innerHTML = infos[19].schedule[6]
      infoPanelPhone.innerHTML = infos[19].contact[0]
      infoPanelEmail.innerHTML = infos[19].contact[1]
      infoPanelWebsite.href = infos[19].website
    });


    CSE.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[20].image
      infoPanelLogo.src = infos[20].logo
      infoPanelTitle.innerHTML = infos[20].title
      infoPanelLead.innerHTML = infos[20].lead
      infoPanelDescription.innerHTML = infos[20].description
      infoPanelMo.innerHTML = infos[20].schedule[0]
      infoPanelTu.innerHTML = infos[20].schedule[1]
      infoPanelWe.innerHTML = infos[20].schedule[2]
      infoPanelTh.innerHTML = infos[20].schedule[3]
      infoPanelFr.innerHTML = infos[20].schedule[4]
      infoPanelSa.innerHTML = infos[20].schedule[5]
      infoPanelSu.innerHTML = infos[20].schedule[6]
      infoPanelPhone.innerHTML = infos[20].contact[0]
      infoPanelEmail.innerHTML = infos[20].contact[1]
      infoPanelWebsite.href = infos[20].website
    });


    CRC.addEventListener('click', () => {
      this.scrolling.target = 0
      infoPanel.style.right = '0'
      infoPanelImage.src = infos[21].image
      infoPanelLogo.src = infos[21].logo
      infoPanelTitle.innerHTML = infos[21].title
      infoPanelLead.innerHTML = infos[21].lead
      infoPanelDescription.innerHTML = infos[21].description
      infoPanelMo.innerHTML = infos[21].schedule[0]
      infoPanelTu.innerHTML = infos[21].schedule[1]
      infoPanelWe.innerHTML = infos[21].schedule[2]
      infoPanelTh.innerHTML = infos[21].schedule[3]
      infoPanelFr.innerHTML = infos[21].schedule[4]
      infoPanelSa.innerHTML = infos[21].schedule[5]
      infoPanelSu.innerHTML = infos[21].schedule[6]
      infoPanelPhone.innerHTML = infos[21].contact[0]
      infoPanelEmail.innerHTML = infos[21].contact[1]
      infoPanelWebsite.href = infos[21].website
    });


    // ISHHostel.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[22].image
    //   infoPanelLogo.src = infos[22].logo
    //   infoPanelTitle.innerHTML = infos[22].title
    //   infoPanelLead.innerHTML = infos[22].lead
    //   infoPanelDescription.innerHTML = infos[22].description
    //   infoPanelMo.innerHTML = infos[22].schedule[0]
    //   infoPanelTu.innerHTML = infos[22].schedule[1]
    //   infoPanelWe.innerHTML = infos[22].schedule[2]
    //   infoPanelTh.innerHTML = infos[22].schedule[3]
    //   infoPanelFr.innerHTML = infos[22].schedule[4]
    //   infoPanelSa.innerHTML = infos[22].schedule[5]
    //   infoPanelSu.innerHTML = infos[22].schedule[6]
    //   infoPanelPhone.innerHTML = infos[22].contact[0]
    //   infoPanelEmail.innerHTML = infos[22].contact[1]
    //   infoPanelWebsite.href = infos[22].website
    // });


    // ISHHostel.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[23].image
    //   infoPanelLogo.src = infos[23].logo
    //   infoPanelTitle.innerHTML = infos[23].title
    //   infoPanelLead.innerHTML = infos[23].lead
    //   infoPanelDescription.innerHTML = infos[23].description
    //   infoPanelMo.innerHTML = infos[23].schedule[0]
    //   infoPanelTu.innerHTML = infos[23].schedule[1]
    //   infoPanelWe.innerHTML = infos[23].schedule[2]
    //   infoPanelTh.innerHTML = infos[23].schedule[3]
    //   infoPanelFr.innerHTML = infos[23].schedule[4]
    //   infoPanelSa.innerHTML = infos[23].schedule[5]
    //   infoPanelSu.innerHTML = infos[23].schedule[6]
    //   infoPanelPhone.innerHTML = infos[23].contact[0]
    //   infoPanelEmail.innerHTML = infos[23].contact[1]
    //   infoPanelWebsite.href = infos[23].website
    // });
    // mudac.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[1].image
    //   infoPanelLogo.src = infos[1].logo
    //   infoPanelTitle.innerHTML = infos[1].title
    //   infoPanelLead.innerHTML = infos[1].lead
    //   infoPanelDescription.innerHTML = infos[1].description
    //   infoPanelMo.innerHTML = infos[1].schedule[0]
    //   infoPanelTu.innerHTML = infos[1].schedule[1]
    //   infoPanelWe.innerHTML = infos[1].schedule[2]
    //   infoPanelTh.innerHTML = infos[1].schedule[3]
    //   infoPanelFr.innerHTML = infos[1].schedule[4]
    //   infoPanelSa.innerHTML = infos[1].schedule[5]
    //   infoPanelSu.innerHTML = infos[1].schedule[6]
    //   infoPanelPhone.innerHTML = infos[1].contact[0]
    //   infoPanelEmail.innerHTML = infos[1].contact[1]
    //   infoPanelWebsite.href = infos[1].website
    // });

    // elysee.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[2].image
    //   infoPanelLogo.src = infos[2].logo
    //   infoPanelTitle.innerHTML = infos[2].title
    //   infoPanelLead.innerHTML = infos[2].lead
    //   infoPanelDescription.innerHTML = infos[2].description
    //   infoPanelMo.innerHTML = infos[2].schedule[0]
    //   infoPanelTu.innerHTML = infos[2].schedule[1]
    //   infoPanelWe.innerHTML = infos[2].schedule[2]
    //   infoPanelTh.innerHTML = infos[2].schedule[3]
    //   infoPanelFr.innerHTML = infos[2].schedule[4]
    //   infoPanelSa.innerHTML = infos[2].schedule[5]
    //   infoPanelSu.innerHTML = infos[2].schedule[6]
    //   infoPanelPhone.innerHTML = infos[2].contact[0]
    //   infoPanelEmail.innerHTML = infos[2].contact[1]
    //   infoPanelWebsite.href = infos[2].website
    // });

    // arcadia.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[3].image
    //   infoPanelLogo.src = infos[3].logo
    //   infoPanelTitle.innerHTML = infos[3].title
    //   infoPanelLead.innerHTML = infos[3].lead
    //   infoPanelDescription.innerHTML = infos[3].description
    //   infoPanelMo.innerHTML = infos[3].schedule[0]
    //   infoPanelTu.innerHTML = infos[3].schedule[1]
    //   infoPanelWe.innerHTML = infos[3].schedule[2]
    //   infoPanelTh.innerHTML = infos[3].schedule[3]
    //   infoPanelFr.innerHTML = infos[3].schedule[4]
    //   infoPanelSa.innerHTML = infos[3].schedule[5]
    //   infoPanelSu.innerHTML = infos[3].schedule[6]
    //   infoPanelPhone.innerHTML = infos[3].contact[0]
    //   infoPanelEmail.innerHTML = infos[3].contact[1]
    //   infoPanelWebsite.href = infos[3].website
    // });

    // nabi.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[4].image
    //   infoPanelLogo.src = infos[4].logo
    //   infoPanelTitle.innerHTML = infos[4].title
    //   infoPanelLead.innerHTML = infos[4].lead
    //   infoPanelDescription.innerHTML = infos[4].description
    //   infoPanelMo.innerHTML = infos[4].schedule[0]
    //   infoPanelTu.innerHTML = infos[4].schedule[1]
    //   infoPanelWe.innerHTML = infos[4].schedule[2]
    //   infoPanelTh.innerHTML = infos[4].schedule[3]
    //   infoPanelFr.innerHTML = infos[4].schedule[4]
    //   infoPanelSa.innerHTML = infos[4].schedule[5]
    //   infoPanelSu.innerHTML = infos[4].schedule[6]
    //   infoPanelPhone.innerHTML = infos[4].contact[0]
    //   infoPanelEmail.innerHTML = infos[4].contact[1]
    //   infoPanelWebsite.href = infos[4].website
    // });

    // lumen.addEventListener('click', () => {
    //   this.scrolling.target = 0
    //   infoPanel.style.right = '0'
    //   infoPanelImage.src = infos[5].image
    //   infoPanelLogo.src = infos[5].logo
    //   infoPanelTitle.innerHTML = infos[5].title
    //   infoPanelLead.innerHTML = infos[5].lead
    //   infoPanelDescription.innerHTML = infos[5].description
    //   infoPanelMo.innerHTML = infos[5].schedule[0]
    //   infoPanelTu.innerHTML = infos[5].schedule[1]
    //   infoPanelWe.innerHTML = infos[5].schedule[2]
    //   infoPanelTh.innerHTML = infos[5].schedule[3]
    //   infoPanelFr.innerHTML = infos[5].schedule[4]
    //   infoPanelSa.innerHTML = infos[5].schedule[5]
    //   infoPanelSu.innerHTML = infos[5].schedule[6]
    //   infoPanelPhone.innerHTML = infos[5].contact[0]
    //   infoPanelEmail.innerHTML = infos[5].contact[1]
    //   infoPanelWebsite.href = infos[5].website
    // });

    closeIcn.addEventListener('click', () => {
      infoPanel.style.right = infoPanelRightStyle
    });
  }

  resize() {}

  update() {
    for(const point of this.points) {
      const screenPosition = point.position.clone()
      screenPosition.project(this.camera.orthographicCamera)

      point.element.classList.add('visible')

      // this.raycaster.setFromCamera(screenPosition, this.camera.orthographicCamera)
      // const intersects = this.raycaster.intersectObjects(this.scene.children, true)

      // if(intersects.length === 0) {
      //   point.element.classList.add('visible')
      // } else {
      //   const intersectionDistance = intersects[0].distance
      //   const pointDistance = point.position.distanceTo(this.camera.orthographicCamera.position)

      //   if(intersectionDistance < pointDistance) {
      //     point.element.classList.remove('visible')
      //   } else {
      //     point.element.classList.add('visible')
      //   }
      // }

      const translateX = screenPosition.x * this.sizes.width * 0.5
      const translateY = - screenPosition.y * this.sizes.height * 0.5
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
  }
}
