import apiService from "../api/apiService";

export const addResumeApi=async(resumeData)=>{
   return await apiService("POST","/allresumes",resumeData)
}

export const getResumeApi=async(id)=>{
   return await apiService("GET",`/allresumes/${id}`,{})
}