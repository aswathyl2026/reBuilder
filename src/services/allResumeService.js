import apiService from "../api/apiService";

export const addResumeApi=async(resumeData)=>{
   return await apiService("POST","/allresumes",resumeData)
}

export const getResumeApi=async(id)=>{
   return await apiService("GET",`/allresumes/${id}`,{})
}
export const downloadResumeApi=async(resumeData)=>{
   return await apiService("POST","/downloads",{resumeData})
}
export const getDownloadResumeApi=async()=>{
   return await apiService("GET","/downloads",{})
}