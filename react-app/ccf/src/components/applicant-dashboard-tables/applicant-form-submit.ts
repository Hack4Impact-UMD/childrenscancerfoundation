import { doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";
import { db } from '../../index';
import { uploadFileToStorage } from "../../storage/storage";
import { ApplicationInfo, ApplicationQuestions } from '../../types/application-types';

export const writeApplicationInfo = async( 
    applicationInfo: ApplicationInfo, 
    applicationQuestions: ApplicationQuestions, 
    file: File 
) => {
    try {
        const pdfUrl = await uploadFileToStorage(file);
        
        const newApplicationRef = doc(db, 'applications', Date.now().toString());
        await setDoc(newApplicationRef, {
            title: applicationInfo.title,
            principalInvestigator: applicationInfo.principalInvestigator,
            typesOfCancerAddressed: applicationInfo.typesOfCancerAddressed,
            namesOfStaff: applicationInfo.namesOfStaff,
            institution: applicationInfo.institution,
            institutionAddress: applicationInfo.institutionAddress,
            institutionPhoneNumber: applicationInfo.institutionPhoneNumber,
            instituionEmail: applicationInfo.instituionEmail,
            adminOfficialName: applicationInfo.adminOfficialName,
            adminOfficialAddress: applicationInfo.adminOfficialAddress,
            adminPhoneNumber: applicationInfo.adminPhoneNumber,
            adminEmail: applicationInfo.adminEmail,
    
            includedPublishedPaper: applicationQuestions.includedPublishedPaper,
            creditAgreement: applicationQuestions.creditAgreement,
            patentApplied: applicationQuestions.patentApplied,
            includedFundingInfo: applicationQuestions.includedFundingInfo,
            amountRequested: applicationQuestions.amountRequested,
            dates: applicationQuestions.dates,
            continuation: applicationQuestions.continuation,
            ...(applicationQuestions.continuationYears && { continuationYears: applicationQuestions.continuationYears }),
            pdf: pdfUrl, 
        });

    } catch (error) {
        console.error("Error writing application data:", error);
        throw error;
    }
};

export const searchApplications = async (
    feature: keyof ApplicationInfo, 
    searchString: string
) => {
  try {
        const lowercaseSearch = searchString.toLowerCase().trim();
        const applicationsRef = collection(db, 'applications');
        const q = query(applicationsRef, 
                        where(feature, '>=', searchString), 
                        where(feature, '<=', searchString + '\uf8ff')
                       );
        const querySnapshot = await getDocs(q);
    
        const applications = querySnapshot.docs.map(doc => doc.data());
        const filteredResults = results.filter(
            app => String(app[feature]).toLowerCase().includes(lowercaseSearch)
    );
    
        return applications;
  } catch (error) {
        console.error("Error searching for applications:", error);
        throw error;
  }
};
