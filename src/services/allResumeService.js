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
export const deleteDownloadResumeApi=async(resumeId)=>{
   return await apiService("DELETE",`/downloads/${resumeId}`,{})
}
export const updateResumeApi=async(id,updateDetails)=>{
   return await apiService("PUT",`/allresumes/${id}`,updateDetails)
}