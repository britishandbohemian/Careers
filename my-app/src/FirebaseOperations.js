import { db } from './firebaseConfig'; // Ensure this path matches your actual config file
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc,Timestamp } from 'firebase/firestore';



const addFakeJobs = async () => {
  const fakeJobsData = [
    {
      title: 'Junior Web Developer',
      company: 'StartUpTech Co.',
      description: 'Looking for a passionate Junior Web Developer...',
      pay: 'R30,000 - R40,000',
      type: 'Full-Time',
      location: 'Remote',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      logo: 'https://via.placeholder.com/50',
      posted: Timestamp.now() // Current timestamp
    },
     // 5 new fake jobs (with correct structure)
   {
    title: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'We seek a talented frontend developer to build beautiful and responsive user interfaces using modern web technologies.',
    pay: 'R45,000 - R60,000',
    type: 'Full-Time',
    location: 'Cape Town',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'UI/UX'],
    logo: 'https://via.placeholder.com/50', // Add a placeholder logo 
    posted: Timestamp.now()
 },
 {
    title: 'Python Backend Developer',
    company: 'Data Solutions Inc.',
    description: 'Join our team to develop robust backend systems using Python, Django, and REST APIs.',
    pay: 'R70,000 - R90,000 ',
    type: 'Contract',
    location: 'Johannesburg',
    skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL'],
    logo: 'https://via.placeholder.com/50', 
    posted: Timestamp.now()
 },
 {
    title: 'UX/UI Designer',
    company: 'Product Labs',
    description: 'We need a creative UX/UI Designer to research user needs, design intuitive interfaces, and create stunning visuals.',
    pay: 'R50,000 - R65,000',
    type: 'Full-Time',
    location: 'Remote',
    skills: ['UX Research', 'UI Design', 'Figma', 'Adobe XD', 'Prototyping'],
    logo: 'https://via.placeholder.com/50', 
    posted: Timestamp.now()
 },
 {
    title: 'DevOps Engineer',
    company: 'CloudOps',
    description: 'Help us build and maintain our cloud-based infrastructure. Experience with AWS, CI/CD pipelines, and containerization is a must.',
    pay: 'R80,000 - R100,000',
    type: 'Full-Time',
    location: 'Durban',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
    logo: 'https://via.placeholder.com/50', 
    posted: Timestamp.now()
 },
 {
    title: 'Mobile App Developer (Flutter)',
    company: 'Appify Ltd.',
    description: 'Build cross-platform mobile apps using Flutter.  Proficiency in Dart and experience with state management are essential.',
    pay: 'R60,000 - R80,000',
    type: 'Contract',
    location: 'Remote',
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Android', 'iOS'],
    logo: 'https://via.placeholder.com/50', 
    posted: Timestamp.now()
 }
    // ... Add four more fake jobs with similar structure
  ];

  try {
    for (const jobData of fakeJobsData) {
      const docRef = await addDoc(collection(db, 'Jobs'), jobData);
      console.log("Document written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
};

// Call the function to add the fake jobs
addFakeJobs();


const addJob = async (jobData) => {
  try {
    const docRef = await addDoc(collection(db, 'Jobs'), jobData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getAllJobs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Jobs'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return [];
  }
};

const updateJob = async (jobId, updatedData) => {
  try {
    const jobRef = doc(db, 'Jobs', jobId);
    await updateDoc(jobRef, updatedData);
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const deleteJob = async (jobId) => {
  try {
    const jobRef = doc(db, 'Jobs', jobId);
    await deleteDoc(jobRef);
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export { addJob, getAllJobs, updateJob, deleteJob,addFakeJobs };
