// =========================
// FREE FIRE CHECK
// =========================

const popup = document.getElementById("welcomePopup");
const closePopup = document.getElementById("closePopup");

const checkBtn = document.getElementById("checkBtn");

const loading = document.getElementById("loading");

const card = document.getElementById("resultCard");

const uidInput = document.getElementById("uid");

const region = document.getElementById("region");

// API của bạn sau này

const API_URL = "https://YOUR_API_URL";

// Đóng popup

closePopup.onclick = () => {

popup.style.display = "none";

};

// Check

checkBtn.onclick = async ()=>{

const uid = uidInput.value.trim();

if(uid==""){

alert("Vui lòng nhập UID");

return;

}

loading.style.display="block";

card.style.display="none";

try{

const response = await fetch(`${API_URL}?uid=${uid}&region=${region.value}`);

const data = await response.json();

loading.style.display="none";

if(!data){

alert("Không tìm thấy UID");

return;

}

card.style.display="block";

document.getElementById("nickname").innerText=data.basicInfo.nickname;

document.getElementById("accountId").innerText=data.basicInfo.accountId;

document.getElementById("server").innerText=data.basicInfo.region;

document.getElementById("level").innerText=data.basicInfo.level;

document.getElementById("exp").innerText=data.basicInfo.exp;

document.getElementById("liked").innerText=data.basicInfo.liked;

document.getElementById("rank").innerText=data.basicInfo.rank;

document.getElementById("csrank").innerText=data.basicInfo.csRank;

document.getElementById("clan").innerText=data.clanBasicInfo.clanName;

document.getElementById("pet").innerText=data.petInfo.name;

document.getElementById("credit").innerText=data.creditScoreInfo.creditScore;

document.getElementById("signature").innerText=data.socialInfo.signature;

// avatar

document.getElementById("avatar").src=`https://your-avatar-api/${data.basicInfo.headPic}.png`;

}catch(e){

loading.style.display="none";

alert("Không kết nối được API");

console.log(e);

}

}
