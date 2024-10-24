import{a as M,J as g}from"./jobs-DhiDD4xb.js";const A=["#B3A639","#F68220","#C6533B","#AB75F0","#94C2AC","#D3ADFF","#CD6A56","#F4C06E","#1E6442","#2052D5","#7145E9","#C69AFE","#A03F79","#7A4040","#DE9D90","#B910E4","#07B964","#5500B9","#FF7053","#B77000","#2B898F","#628BF7","#856CC8","#F97F66","#285C82","#FF007A"],O=["Monday","Tuesday","Wednesday","Thursday","Friday"];function k(t){var c,n;const u=!t.student_route||((c=t.student_route[0].routes)==null?void 0:c.length)===0||!t.staffs||t.staffs.length===0||!t.staffs[0].staffs||!t.input_business_rules;if(t.status!==M.COMPLETED||u)return{jobId:t.id,jobName:(t==null?void 0:t.job_name)??"Job Name",shortHandJobName:(t==null?void 0:t.short_hand_job_name)??"SHORTHAND",status:t.status,targetStudentOnboardingTime:0,targetStaffsOnboardingTime:0,targetNumberOfRoutes:0,maxDistance:0,routeStartLocation:"",routeEndLocation:"",vehicleYard:"",curbside_pickup_dropoff:((n=t.input_business_rules)==null?void 0:n.curbside_pickup_dropoff)??!1,totalAbandonedStudents:0,totalJobStudents:0,updatedAt:t.updated_at??"",createdAt:t.created_at??"",routes:[],routesInfo:[],isOldJob:u};const d=[],s=[];t.student_route[0].routes.forEach(o=>{var p;const h=(p=t.staffs)==null?void 0:p.filter(e=>e.day===o.day);if(!h){console.log("ROUTE BY DAY NOT FOUND");return}const m=o.routes.pick_up.map(e=>{const r=h[0].staffs.filter(l=>l.student_route_id===e.summary.route_id);return I(e,"pick_up",r)}),S=o.routes.drop_off.map(e=>{const r=h[0].staffs.filter(l=>l.student_route_id===e.summary.route_id);return I(e,"drop_off",r)});N([...m,...S],s,t),d.push({dayOfTheWeek:o.day,formattedRouteStopsByDay:[...m,...S]})});let i=0;return d[0].formattedRouteStopsByDay.filter(o=>o.shift===g.AM).forEach(o=>i+=o.studentNumber),{jobId:t.id,jobName:t.job_name??"Job name",shortHandJobName:t.short_hand_job_name??"Job short hand name",status:t.status,targetStudentOnboardingTime:t.input_business_rules.max_student_onboarding_time??0,targetStaffsOnboardingTime:t.input_business_rules.max_staff_onboarding_time??0,targetNumberOfRoutes:t.input_business_rules.num_routes??0,maxDistance:t.input_business_rules.max_walking_distance??0,routeStartLocation:t.input_business_rules.start_end_location??"Automatic",routeEndLocation:t.input_business_rules.start_end_location??"Automatic",vehicleYard:"Automatic",curbside_pickup_dropoff:t.input_business_rules.curbside_pickup_dropoff??!1,totalAbandonedStudents:321,totalJobStudents:i,updatedAt:t.updated_at,createdAt:t.created_at,routes:d,routesInfo:s}}function I(t,u,d){const s=u==="pick_up";let i=[],f=[],_=0;const a=d.length?d[0].staff_route:void 0;if(t.summary.is_staff_route_present&&a&&a.staff_pickup_AM&&a.staff_dropoff_AM&&a.staff_pickup_PM&&a.staff_dropoff_PM){const e=s?a.staff_pickup_AM.stops:a.staff_pickup_PM.stops??[],r=s?a.staff_dropoff_AM.stops:a.staff_dropoff_PM.stops??[];f=[...e.length>0?e.slice(0,-1):[],...t.stops.slice(1).slice(0,-1)],i=r.length>0?r.slice(1):[],_=(s?a.staff_pickup_AM.summary.num_staffs:a.staff_pickup_PM.summary.num_staffs)??0}else f=t.stops.slice(0,-1),i=t.stops.slice(-1);d.length&&d[0].staffs_meet_at_yard&&(_+=d[0].staffs_meet_at_yard.staffs.length);const c=f[f.length-1];let n=0,o=0;f.forEach(e=>{n+=e.service_time,o+=e.distance_from_previous??0}),i.forEach(e=>{n+=e.service_time,o+=e.distance_from_previous??0});const m=(s?f[f.length-1]:t.stops[1]).name,S=Math.max(t.summary.number_of_students_pickup,t.summary.number_of_students_dropoff),p=[];return t.stops.forEach(e=>{e.students&&e.students.forEach(r=>{r.student_id&&p.push(r.student_id)})}),{studentRouteId:(t.summary.route_id??"").toString(),shift:s?g.AM:g.PM,departureRouteStops:f,backRouteStops:i,schoolName:(m==null?void 0:m.toString())??"-",numberOfStaffsNeeded:_??0,totalTimeInHR:(n/60).toFixed(1),distanceInKM:Math.round(o/1e3),studentNumber:S,studentDestinationStop:c,studentsIds:p}}function N(t,u,d){t.forEach((s,i)=>{const f=Math.floor(Math.random()*51),_=A[(i+f)%A.length],a=u.filter(n=>n.studentRouteId===s.studentRouteId),c=s.studentRouteId.length>2?s.studentRouteId:`${d.short_hand_job_name}-0${s.studentRouteId}`;if(!a||a.length===0)u.push({studentRouteId:s.studentRouteId,shortHandRouteName:c,schoolName:s.schoolName,maxDistance:s.distanceInKM,maxTime:s.totalTimeInHR,studentsIds:s.studentsIds,numberStaffsNeeded:s.numberOfStaffsNeeded,color:_,isCurbside:d.input_business_rules.curbside_pickup_dropoff});else{const n=a[0];s.distanceInKM>n.maxDistance&&(n.maxDistance=s.distanceInKM),s.totalTimeInHR>n.maxTime&&(n.maxTime=s.totalTimeInHR),s.numberOfStaffsNeeded>n.numberStaffsNeeded&&(n.numberStaffsNeeded=s.numberOfStaffsNeeded);const o=[...new Set([...s.studentsIds,...n.studentsIds])];n.studentsIds=o}})}export{A as c,O as d,k as g};