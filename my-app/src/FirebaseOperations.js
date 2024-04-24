import { db } from './firebaseConfig'; // Ensure this path matches your actual config file
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';


const addFakeJob = async () => {
  const fakeJobData = [{
    title: 'Junior Web Developer',
    company: 'StartUpTech Co.',
    description: 'Looking for a passionate Junior Web Developer to create and maintain software...',
    pay: 'R30,000 - R40,000',
    type: 'Full-Time',
    location: 'Remote',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    logo: 'https://via.placeholder.com/50',
    
  },{
    title: 'Junior Web Developer',
    company: 'StartUpTech Co.',
    description: 'Looking for a passionate Junior Web Developer to create and maintain software...',
    pay: 'R30,000 - R40,000',
    type: 'Full-Time',
    location: 'Remote',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    logo: 'https://via.placeholder.com/50',
    
  }];

  try {
    const docRef = await addDoc(collection(db, 'Joba'), fakeJobData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Call the function to add the job
addFakeJob();


const addJob = async (jobData) => {
  try {
    const docRef = await addDoc(collection(db, 'Joba'), jobData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getAllJobs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Joba'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return [];
  }
};

const updateJob = async (jobId, updatedData) => {
  try {
    const jobRef = doc(db, 'Joba', jobId);
    await updateDoc(jobRef, updatedData);
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const deleteJob = async (jobId) => {
  try {
    const jobRef = doc(db, 'Joba', jobId);
    await deleteDoc(jobRef);
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export { addJob, getAllJobs, updateJob, deleteJob };
