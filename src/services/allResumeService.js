import apiService from "../api/apiService";

export const addResumeApi=async(resumeData)=>{
   return await apiService("POST","/allresumes",resumeData)
}